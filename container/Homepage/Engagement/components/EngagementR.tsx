import Link from 'next/link';

export const EngagementR = () => {
    const textWA =
        'Eh, lo udah cek Kudoku belum? Ini menurut gua aplikasinya keren banget sih. Jadi aplikasi ini ngebikin gua bisa nge-track seluruh aspek finansial gua. Mulai dari income, expense, asset, sampe liability. Gua bisa tau kemana duit gua pergi secara detail. Lo mending check dah di ';
    const URISafeWA = encodeURIComponent(textWA);
    const waLink = `https://wa.me/send?text=${URISafeWA}%20https%3A%2F%2Fkudoku.id%3Futm_source%3Dwhatsapp.`;

    const textTwitter =
        'Eh, lo udah cek @kudokuapp belum? Ini menurut gua aplikasinya keren banget sih. Pake Kudoku, gua bisa nge-track pemasukan, pengeluaran, investasi, tabungan sampe utang gua. ';
    const URISafeTwitter = encodeURIComponent(textTwitter);
    const twitterLink = `https://twitter.com/intent/tweet?text=${URISafeTwitter}%20https%3A%2F%2Fkudoku.id%3Futm_source%3Dtwitter`;

    const handleShake = () => {
        var d = document.getElementById('placeholder');
        window.scrollTo(0, d ? d.offsetTop - 85 : 0);
        d?.classList.add('shakeit__link');
        setTimeout(() => d?.classList.remove('shakeit__link'), 3000);
    };

    return (
        <section className="card-main bg-primary lg:py-14 sm:py-10 py-8 self-stretch">
            <div className="lg:px-16 sm:px-10 px-6">
                <h4 className="sm:text-left text-center lg:text-4xl font-bold text-3xl text-onPrimary">
                    Mau bantuin kita?
                </h4>
                <h5 className="sm:text-left text-center lg:text-4xl font-bold text-3xl text-onPrimaryContainer">
                    Ini hal yang bisa lo lakuin
                </h5>
            </div>
            <ul className="mt-10 flex flex-col gap-4 list-none lg:px-16 md:px-10 sm:px-8 px-6">
                <li>
                    <Link href={twitterLink} passHref>
                        <a target="_blank" rel="noopener noreferrer" className="no-underline">
                            <p className="cursor-pointer text-onPrimary sm:text-left text-center lg:text-2xl hover:text-errorContainer text-xl m-0 animation-popup">
                                Tweet tentang Kudoku ~&gt;
                            </p>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={waLink} passHref>
                        <a target="_blank" rel="noopener noreferrer" className="no-underline">
                            <p className="cursor-pointer text-onPrimary sm:text-left text-center lg:text-2xl hover:text-errorContainer text-xl m-0 animation-popup">
                                Share Kudoku di WA ~&gt;
                            </p>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="https://trakteer.id/kudoku/tip" passHref>
                        <a target="_blank" rel="noopener noreferrer" className="no-underline">
                            <p className="cursor-pointer text-onPrimary sm:text-left text-center lg:text-2xl hover:text-errorContainer text-xl m-0 animation-popup">
                                Trakteer Kudoku kopi ~&gt;
                            </p>
                        </a>
                    </Link>
                </li>
            </ul>
        </section>
    );
};
