import {
    LottieAnimationGede,
    LottieAnimationKecil,
    LottieAnimationXtraKecil,
} from '../components/Lottie/ErrorFourOhFour';
import Link from 'next/link';
import Head from 'next/head';

export default function FourOhFour() {
    return (
        <>
            <Head>
                <title>404</title>
            </Head>
            <div className="flex flex-col h-full w-full max-w-[1400px] mx-auto lg:px-0 px-[3vmin] mt-10">
                <section className="h-max lg:mx-6 md:mb-16 mb-8 mt-8">
                    <div className="card-main flex flex-col gap-20 lg:px-16 lg:pb-14 sm:px-12 sm:pb-10 px-8 pb-8 bg-onPrimary">
                        <div>
                            <h1 className="text-center">Gak nemu halamannya nih?</h1>
                            <p className="text-center">404 Error</p>
                        </div>
                        <div className="w-fit h-fit border-4 border-black mx-auto md:block hidden">
                            <LottieAnimationGede />
                        </div>
                        <div className="w-fit h-fit border-2 border-black mx-auto lg:hidden md:hidden sm:block hidden">
                            <LottieAnimationKecil />
                        </div>
                        <div className="w-fit h-fit border-[1px] border-black mx-auto lg:hidden md:hidden sm:hidden xs:block block">
                            <LottieAnimationXtraKecil />
                        </div>
                        <div className="md:px-20 sm:px-8 px-2 text-center">
                            <h2>
                                Mending daripada bengong liatin animasinya, kita ke{' '}
                                <Link href="/">
                                    <button className="text-onPrimary cursor-pointer animation-mantep mx-2 my-2 bg-primary px-4 py-2 shadow-lg rounded-lg">
                                        homepage
                                    </button>
                                </Link>{' '}
                                aja yuk.
                            </h2>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
