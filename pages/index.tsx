import Head from 'next/head';
import { HomePage } from '../container/Homepage';
import { Comment } from '../container/Homepage/Comment';
import { UserAuth } from '../context/AuthContext';

export default function Page() {
    // const { handleSignOut } = UserAuth();

    return (
        <>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <title>Kudoku - Ngatur Duit? Gampang.</title>
            </Head>

            {/* <button
                className="bg-primary text-onPrimary rounded-md px-2 py-1"
                onClick={handleSignOut}
            >
                Sign Out
            </button> */}

            <HomePage />

            <Comment />
        </>
    );
}
