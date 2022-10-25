import '../styles/globals.css';
import '../styles/globals.tailwind.css';
import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { AuthContextProvider } from '../context/AuthContext';
import { useRouter } from 'next/router';
import TimeAgo from 'javascript-time-ago';
import id from 'javascript-time-ago/locale/id.json';

export default function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
    TimeAgo.addDefaultLocale(id);

    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const pathname = router.pathname;

    useEffect(() => {
        Router.events.on('routeChangeStart', () => setLoading(true));
        Router.events.on('routeChangeComplete', () => setLoading(false));
        Router.events.on('routeChangeError', () => setLoading(false));
        return () => {
            Router.events.off('routeChangeStart', () => setLoading(true));
            Router.events.off('routeChangeComplete', () => setLoading(false));
            Router.events.off('routeChangeError', () => setLoading(false));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Router.events]);

    const renderNavbar = () => {
        if (pathname === '/') {
            return <Navbar shakeit={true} />;
        } else if (pathname === '/daftar') {
            return <Navbar tooltip={true} />;
        } else {
            return <Navbar />;
        }
    };

    return (
        <AuthContextProvider>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover, user-scalable=0"
                />

                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/ManifestImage/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/ManifestImage/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/ManifestImage/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/ManifestImage/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/ManifestImage/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/ManifestImage/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/ManifestImage/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/ManifestImage/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/ManifestImage/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-icon-192x192.png"
                />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <meta name="msapplication-TileColor" content="#2C5EA8" />
                <meta name="msapplication-TileImage" content="/ManifestImage/ms-icon-144x144.png" />
                <meta name="theme-color" content="#2C5EA8" />
                <meta name="title" content="Kudoku - Start Your Finance Journey" />
                <meta
                    name="description"
                    content="Kewalahan ngatur duit? Buruan pake Kudoku biar lo pinter ngatur duit. Gratis!"
                />
                <link rel="canonical" href="https://www.kudoku.id/" />
                <meta property="fb:app_id" content="" />
                <meta property="fb:pages" content="" />
                <meta property="og:type" content="product" />
                <meta property="og:url" content="https://www.kudoku.id/" />
                <meta property="og:title" content="Kudoku - Start Your Finance Journey" />
                <meta
                    property="og:description"
                    content="Kewalahan ngatur duit? Buruan pake Kudoku biar lo pinter ngatur duit. Gratis!"
                />
                <meta property="og:image" content="https://kudoku.id/images/meta.png" />
                <meta name="twitter:card" content="photo" />
                <meta name="twitter:site" content="@kudokuapp" />
                <meta name="twitter:creator" content="@kudokuapp" />
                <meta name="twitter:title" content="Kudoku - Start Your Finance Journey" />
                <meta
                    name="twitter:description"
                    content="Kewalahan ngatur duit? Buruan pake Kudoku biar lo pinter ngatur duit. Gratis!"
                />
                <meta name="twitter:image:src" content="https://kudoku.id/images/meta.png" />
                <meta itemProp="name" content="Kudoku - Start Your Finance Journey" />
                <meta
                    itemProp="description"
                    content="Kewalahan ngatur duit? Buruan pake Kudoku biar lo pinter ngatur duit. Gratis!"
                />
                <meta itemProp="image" content="https://kudoku.id/images/meta.png" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="next-head-count" content="35" />
            </Head>

            {loading ? (
                <Loading />
            ) : (
                <>
                    {renderNavbar()}
                    <Component {...pageProps} />
                    <section className="flex flex-col h-full w-full max-w-[1400px] mx-auto lg:px-0 px-[3vmin]">
                        <Footer />
                    </section>
                </>
            )}
        </AuthContextProvider>
    );
}

function Loading() {
    return (
        <div className="w-full min-h-[100vh] flex flex-col items-center justify-center">
            <svg
                className="wave-2"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_133_308)">
                    <path
                        d="M4.94792 1.5625L5.48103 1.27089C5.99276 0.990973 6.52722 0.754773 7.07871 0.564809C8.1643 0.190871 9.30451 0 10.4527 0H89.2486C90.0577 0 90.8658 0.0578512 91.6667 0.173111L92.9795 0.556327C93.4921 0.705973 93.9903 0.901391 94.4679 1.14022L94.549 1.18074C95.0566 1.43454 95.5359 1.74125 95.9791 2.09577C96.4017 2.43384 96.7891 2.81363 97.1356 3.22937L97.9167 4.16667L98.7839 5.55428C99.0728 6.01646 99.3058 6.51127 99.4782 7.02833C99.6518 7.54925 99.7626 8.08904 99.8082 8.63623L99.8526 9.16929C99.9503 10.341 99.8654 11.5207 99.601 12.6664L99.466 13.2516C99.302 13.962 99.035 14.6445 98.6733 15.2775C98.3439 15.8538 97.9393 16.3837 97.4699 16.853L96.6146 17.7083L57.5521 47.9167L56.6551 48.5894C55.8673 49.1803 55.0089 49.6708 54.0999 50.0495L53.7907 50.1784C52.8322 50.5777 51.8068 50.8226 50.7715 50.9022C49.5802 50.9938 48.3715 50.8647 47.2276 50.5196C46.3033 50.2408 45.426 49.8251 44.6248 49.2863L43.75 48.6979L4.16667 18.2292L3.14513 17.2076C2.78494 16.8474 2.45077 16.4621 2.14515 16.0546L1.89542 15.7217C1.33035 14.9682 0.897152 14.1244 0.61427 13.2261C0.462149 12.743 0.354407 12.2471 0.292383 11.7445L0.190726 10.9206C0.0645065 9.89776 0.114262 8.86082 0.33784 7.85472C0.459571 7.30693 0.632079 6.77168 0.853126 6.2559L1.30208 5.20833L1.55827 4.78136C1.90699 4.20015 2.32569 3.6639 2.80497 3.18461C3.19099 2.79859 3.6142 2.45165 4.06843 2.14883L4.94792 1.5625Z"
                        fill="#348A95"
                    />
                    <path
                        d="M0.141487 8.76394L0 9.89583V88.2627C0 89.4888 0.0870242 90.7133 0.260417 91.9271L0.579632 93.0443C0.713755 93.5138 0.891124 93.9697 1.10946 94.4064C1.41025 95.008 1.78668 95.5687 2.22958 96.0749L2.88458 96.8234C3.21781 97.2043 3.58416 97.5548 3.97932 97.871C4.45012 98.2476 4.9594 98.5734 5.49867 98.8431L5.65854 98.923C6.05235 99.1199 6.45964 99.2886 6.87734 99.4279C7.49904 99.6351 8.1409 99.7761 8.79222 99.8484L10.1562 100H88.5201C89.5743 100 90.6268 99.9129 91.6667 99.7396L92.7419 99.417C93.7547 99.1132 94.7123 98.6493 95.5785 98.0429L95.6264 98.0094C96.4536 97.4304 97.1836 96.7239 97.7895 95.9161C98.2201 95.3419 98.5846 94.721 98.8762 94.0651L98.9636 93.8684C99.3062 93.0974 99.5627 92.2908 99.7281 91.4635L99.7396 91.4062L99.8971 89.9887C99.9654 89.3742 99.9484 88.7532 99.8468 88.1432C99.7755 87.7154 99.6629 87.2955 99.5106 86.8894L98.9583 85.4167C98.2684 84.0368 97.3605 82.7772 96.2696 81.6863L95.8333 81.25L18.1082 3.52488C17.4952 2.91184 16.8394 2.34309 16.1458 1.82292L14.8437 1.04167C13.6351 0.523662 12.3566 0.186618 11.0497 0.0414007L10.6771 0H10.1882C9.64698 0 9.10672 0.0447128 8.57291 0.133682L8.53071 0.140714C8.05264 0.220393 7.58154 0.337403 7.12174 0.490668C6.542 0.683917 5.98276 0.933959 5.45217 1.23715L4.42708 1.82292L4.2693 1.94125C3.68079 2.38264 3.12434 2.86524 2.60417 3.38542L2.21565 3.87107C1.78143 4.41384 1.40221 5.00808 1.09136 5.62979C0.88644 6.03962 0.708527 6.46817 0.56363 6.90286C0.361981 7.50781 0.22058 8.13119 0.141487 8.76394Z"
                        fill="#345995"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_133_308">
                        <rect width="100" height="100" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}
