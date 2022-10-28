import { HeaderIcon } from './components/HeaderIcon';
import Link from 'next/link';

export const Header = () => {
    return (
        <div className="flex flex-col items-center gap-0 mt-10">
            <HeaderIcon />
            <div className="flex flex-col items-center m-0 gap-12">
                <h1 className="gradient-text-new m-0 md:text-6xl text-4xl leading-snug mt-8">
                    Roadmap
                </h1>
                <div className="flex flex-col items-center m-0 max-w-[800px] gap-8">
                    <p className="text-center font-base md:text-2xl text-xl m-0">
                        Kudoku sebagai produk dan perusahaan masih berada di stage awal banget.
                        Aplikasi yang lo liat sekarang BELUM menjadi aplikasi yang kita bayangkan
                        dan damba-dambakan. Tapi kami tau, to get to the end point, we have to have
                        a starting point.
                    </p>
                    <p className="text-center font-base md:text-2xl text-xl m-0">
                        Semoga roadmap ini bisa ngebuat lo ngeliat apa yang lagi kita kerjain untuk
                        jangka waktu short maupun mid term. Dan percayalah, we are working our asses
                        off untuk ngebuat produk ini sebagus mungkin. Semua hal yang udah Kudoku
                        release, bisa lo liat di{' '}
                        <Link href="/changelog">
                            <button className="bg-primary animation-popup font-bold hover:bg-onPrimaryContainer m-1 text-onPrimary px-2 py-0.5 rounded-md shadow-md">
                                changelog
                            </button>
                        </Link>{' '}
                        🙂
                    </p>
                </div>
            </div>
        </div>
    );
};
