import Head from 'next/head';
import { Security } from '../../container/Security';

export default function Page() {
    return (
        <>
            <Head>
                <title>Keamanan Aplikasi Kudoku</title>
            </Head>
            <Security />
        </>
    );
}
