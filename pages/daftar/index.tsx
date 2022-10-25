import { Widget } from '@typeform/embed-react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Typeform = ({ wa }: { wa: any }) => {
    return (
        <Widget
            id="EnKbwQJL"
            style={{ width: '100%', height: '100%' }}
            hidden={{
                index: '1',
                wa: `${wa}`,
            }}
            className="my-form"
        />
    );
};

export default function Index() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Daftar jadi Kudos</title>
            </Head>
            <div className="flex flex-col h-screen w-full font-inter mt-2">
                <Typeform wa={router.query.wa} />
            </div>
        </>
    );
}
