import Link from 'next/link';

export const Header = () => {
    const textWA =
        'Eh, lo udah check Kudoku belum? Ini menurut gua aplikasinya keren banget sih. Jadi aplikasi ini ngebikin gua bisa nge-track seluruh aspek finansial gua. Mulai dari income, expense, asset, sampe liability. Gua bisa tau kemana duit gua pergi secara detail. Lo mending check dah di ';
    const URISafeWA = encodeURIComponent(textWA);
    const waLink = `https://wa.me/send?text=${URISafeWA}%20https%3A%2F%2Fkudoku.id%3Futm_source%3Dwhatsapp.`;

    const textTwitter =
        'Eh, lo udah check Kudoku belum? Ini menurut gua aplikasinya keren banget sih. Jadi aplikasi ini ngebikin gua bisa nge-track seluruh aspek finansial gua. Mulai dari income, expense, asset, sampe liability. Gua bisa tau kemana duit gua pergi secara detail. Lo mending check dah di @kudokuapp atau di ';
    const URISafeTwitter = encodeURIComponent(textTwitter);
    const twitterLink = `https://twitter.com/intent/tweet?text=${URISafeTwitter}%20https%3A%2F%2Fkudoku.id%3Futm_source%3Dtwitter`;

    return (
        <>
            <div>
                <h1 className="font-bold text-primary text-4xl m-0">Kudoku Changelog</h1>
                <h2 className="font-light text-onPrimaryContainer text-2xl mt-2 mb-2">
                    Behind the Grid — Updates and improvements to Kudoku
                </h2>
                <ul className="m-0 sm:flex sm:gap-4 gap-1 font-[500] sm:flex-wrap">
                    <li className="sm:first:list-none">
                        <Link href="/">
                            <button className="animation-popup hover:text-tertiary text-onPrimaryContainer">
                                Dapatkan Akses
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href={twitterLink}>
                            <a target="_blank" rel="noopener noreferrer">
                                <button className="animation-popup hover:text-tertiary text-onPrimaryContainer">
                                    Share Us on Twitter
                                </button>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={waLink}>
                            <a target="_blank" rel="noopener noreferrer">
                                <button className="animation-popup hover:text-tertiary text-onPrimaryContainer">
                                    Share Us on WhatsApp
                                </button>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <hr />
        </>
    );
};
