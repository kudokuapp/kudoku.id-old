import { Changelog } from '../../container/Changelog';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Client } from '@notionhq/client';
import { getFullDate } from '../../utils/helper/date';
import Head from 'next/head';

export default function Page({ data }: { data: any }) {
    const router = useRouter();
    const post = router.query.post;

    const [heading, setHeading] = useState('');
    const [subHeading, setSubHeading] = useState('');
    const [date, setDate] = useState('');
    const [person, setPerson] = useState('');
    const [personURL, setPersonURL] = useState('');

    useEffect(() => {
        if (post) {
            setHeading(data.dataAsc[Number(post) - 1].properties.Name.title[0].text.content);
            setSubHeading(
                data.dataAsc[Number(post) - 1].properties['Sub Heading'].rich_text[0].plain_text
            );
            setDate(
                getFullDate(data.dataAsc[Number(post) - 1].properties['Published Date'].date.start)
            );
            setPerson(data.dataAsc[Number(post) - 1].properties.Person.people[0].name);
            setPersonURL(data.dataAsc[Number(post) - 1].properties.Person.people[0].avatar_url);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post]);

    const onClose = () => {
        router.push('/changelog');
    };

    return (
        <>
            <Head>
                <title>Yang Baru di Kudoku</title>
            </Head>
            <Changelog
                post={post as unknown as number}
                heading={heading}
                subHeading={subHeading}
                date={date}
                person={person}
                personURL={personURL}
                onClose={onClose}
                data={data}
            />
        </>
    );
}

export async function getServerSideProps() {
    const notion = new Client({ auth: process.env.NOTION_API_KEY_CHANGELOG as string });
    const databaseId = process.env.NOTION_DATABASE_CHANGELOG_ID as string;

    const responseDesc = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: 'Select',
            select: {
                equals: 'Published',
            },
        },
        sorts: [
            {
                property: 'Published Date',
                direction: 'descending',
            },
        ],
    });
    const dataDesc = responseDesc.results;

    const responseAsc = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: 'Select',
            select: {
                equals: 'Published',
            },
        },
        sorts: [
            {
                property: 'Published Date',
                direction: 'ascending',
            },
        ],
    });
    const dataAsc = responseAsc.results;

    const data = { dataAsc, dataDesc };

    return { props: { data } };
}
