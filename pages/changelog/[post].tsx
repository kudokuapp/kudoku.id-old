import Link from 'next/link';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { RegisterLayout } from '../../components/RegisterLayout';
import { Client } from '@notionhq/client';
import { getFullDate } from '../../utils/helper/date';

export default function Page({ data }: { data: any }) {
    const router = useRouter();
    const post = router.query.post;
    const index = Number(post) - 1;

    const heading = data[index].properties.Name.title[0].text.content;
    const subHeading = data[index].properties['Sub Heading'].rich_text[0].plain_text;
    const date = getFullDate(data[index].properties['Published Date'].date.start);
    const person = data[index].properties.Person.people[0].name;
    const personURL = data[index].properties.Person.people[0].avatar_url;

    const ThePost = dynamic(() => import(`../../changelog/mdx/Post${post}.mdx`));

    return (
        <div>
            <Head>
                <title>{heading}</title>
            </Head>

            <div className="max-w-[800px] mx-auto md:px-0 px-4 mt-20">
                <BackButton className="my-8 relative z-20 flex gap-2 items-center text-xl text-onPrimaryContainer hover:text-tertiary animation-popup w-fit h-fit font-bold" />

                <div className="flex flex-col gap-2">
                    <h1 className="md:text-4xl text-3xl font-bold m-0 gradient-text-new">
                        {heading}
                    </h1>
                    <h2 className="md:text-2xl text-xl font-normal text-onPrimaryContainer m-0">
                        {subHeading}
                    </h2>
                    <div className="bg-gradient-to-br from-primary to-secondary w-fit h-fit px-2 py-0.5 rounded-md">
                        <p className="m-0 text-onPrimary text-md">{date}</p>
                    </div>
                    <hr></hr>
                </div>
            </div>

            <main className="mdx-main">
                <ThePost />
            </main>

            <div className="max-w-[800px] mx-auto md:px-0 px-4">
                <div className="flex flex-col gap-2">
                    <hr className="m-0"></hr>
                    <p className="m-0 font-[500] text-xl">Written by:</p>
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img alt="" src={personURL} className="rounded-full" />
                        </div>
                        <p className="m-0 font-bold md:text-2xl text-xl gradient-text-new">
                            {person}
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <RegisterLayout />
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const notion = new Client({ auth: process.env.NOTION_API_KEY_CHANGELOG as string });
    const databaseId = process.env.NOTION_DATABASE_CHANGELOG_ID as string;

    const response = await notion.databases.query({
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

    const data = response.results;

    return { props: { data } };
}

const BackButton = (props: any) => {
    return (
        <Link href="/changelog" passHref>
            <button {...props}>
                <BackIcon className="w-5 h-5" />
                Back
            </button>
        </Link>
    );
};

const BackIcon = (props: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
        </svg>
    );
};
