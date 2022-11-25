import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import founders from './components/founders';

export const Manifesto = () => {
    return (
        <section className="max-w-[800px] px-2 w-fit mx-auto mb-40 mt-20 lg:z-0 sm:z-50 bg-background">
            <h2 className="gradient-text-new font-bold text-4xl mb-8">
                Kami punya impian untuk membuat aplikasi pengelola keuangan yang terbaik.
            </h2>
            <ManifestoText>
                Mengelola keuangan pribadi itu ribet-ribet gampang. Ribet karena banyak hal yang
                harus kita pikirin, gampang karena udah banyak tools yang bisa ngebantu kita, mulai
                dari <i>spreadsheets</i> sampai <i>Personal Financial Management app</i> (PFM).
                Tapi, <i>tools</i> yang udah tersedia untuk membantu kita belum bisa bekerja secara
                maksimal. Masih banyak orang yang ujung-ujungnya berhenti ngatur duit karena malah
                pusing sendiri.
            </ManifestoText>
            <ManifestoText>
                Itulah kenapa kami bertiga mencoba membuat Kudoku. 
                <i>
                    It’s gonna be the best personal financial management app that you’ll ever use.
                    It’s a single app to help you control all your transactions, your investments,
                    even your assets and liabilities.
                </i>{' '}
                A bird's eye view yang bisa ngebantu lo ngertiin kondisi keuangan lo sekarang dan
                pergi ke level finansial yang selanjutnya.
            </ManifestoText>
            <ManifestoText>
                Lo gak bakal pusing lagi ngontrol duit lo, dan perjalanan lo untuk mencari-cari
                aplikasi finansial mana yang paling cocok buat lo, akan berhenti disini.
            </ManifestoText>
            <ManifestoText>
                Kalau lo tertarik dengan alasan lebih lengkap kami ngebuat Kudoku, lo bisa baca
                lengkap manifesto Kudoku.
            </ManifestoText>

            <Link href="/manifesto">
                <button className="bg-gradient-to-br from-primary to-secondary text-onPrimary font-[500] text-lg px-4 py-1.5 rounded-md flex items-center gap-2 shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                    <span>Baca lebih lengkap</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                        <path
                            d="M 1 6 L 11 6"
                            fill="transparent"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            strokeLinecap="round"
                        ></path>
                        <path
                            d="M 7 10 L 11 6 L 7 2"
                            fill="transparent"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            strokeLinecap="round"
                        ></path>
                    </svg>
                </button>
            </Link>
            <div className="flex w-full flex-wrap justify-between mt-8 gap-4">
                {founders.map((item, index) => {
                    return (
                        <Link href={item.link} key={index} passHref>
                            <a target="_blank" rel="noopener noreferrer" className="no-underline">
                                <button
                                    key={index}
                                    className="cursor-pointer flex items-center gap-4 w-fit h-fit"
                                >
                                    <div
                                        className="p-2 select-none"
                                        style={{
                                            position: 'relative',
                                            width: '60px',
                                            height: '80px',
                                        }}
                                    >
                                        <Image
                                            layout="fill"
                                            objectFit="cover"
                                            src={item.imgSrc}
                                            alt={item.alt}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary text-left text-base">
                                            {item.name}
                                        </p>
                                        <p className="font-normal text-onPrimaryContainer text-left text-sm">
                                            {item.title}
                                        </p>
                                    </div>
                                </button>
                            </a>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

const ManifestoText = (props: {
    children:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal;
}) => {
    return (
        <p className="mb-6 last:mb-0 sm:text-xl text-lg text-justify text-black font-normal">
            {props.children}
        </p>
    );
};
