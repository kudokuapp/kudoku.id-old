import { Roadmap } from '../../container/Roadmap';
import Head from 'next/head';
import { Client } from '@notionhq/client';

export default function Page({ data }: { data: any }) {
    return (
        <>
            <Head>
                <title>Roadmap Kudoku</title>
            </Head>

            <Roadmap data={data} />
        </>
    );
}

export async function getServerSideProps() {
    const notion = new Client({ auth: process.env.NOTION_API_KEY_ROADMAP as string });
    const databaseId = process.env.NOTION_DATABASE_ROADMAP_ID as string;

    const responsePlanning = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: 'Status',
            status: {
                equals: 'Planning',
            },
        },
    });
    const dataPlanning = responsePlanning.results;

    const responseInProgress = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: 'Status',
            status: {
                equals: 'In progress',
            },
        },
    });
    const dataInProgress = responseInProgress.results;

    const responseUnderReview = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: 'Status',
            status: {
                equals: 'Under Review',
            },
        },
    });
    const dataUnderReview = responseUnderReview.results;

    const data = { dataPlanning, dataInProgress, dataUnderReview };

    return { props: { data } };
}
