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
                Gak sedikit dari kita yang pusing dalam mengatur keuangan pribadi. Bukan karena kita
                gak mampu, tapi karena kebanyakan dari kita gapernah diajarin hal ini secara baik
                dan benar. Buat lo yang merasa masih “payah” dalam perkara ngatur duit, lo mending
                baca manifesto ini sampe abis.
            </ManifestoText>
            <ManifestoText>
                Mengelola keuangan pribadi itu ribet-ribet gampang. Ribet karena banyak hal yang
                harus lo pikirin, gampang karena udah banyak tools yang bisa ngebantu lo, mulai dari{' '}
                <i>spreadsheets</i> sampai <i>Personal Financial Management</i> app (PFM). Tapi,{' '}
                <i>tools</i> yang udah tersedia untuk membantu lo belum bisa bekerja secara
                maksimal. Itulah kenapa, 8 dari 10 teman kami berhenti mengelola keuangan pribadi
                walaupun udah make <i>tools</i> ini itu. Bukan karena mereka males, tapi mereka
                malah ngerasa pusing sendiri dengan menggunakan <i>tools</i> itu, khususnya saat
                menggunakan PFM.
            </ManifestoText>
            <ManifestoText>
                Itulah kenapa kami bertiga mencoba membuat <strong>Kudoku</strong>.{' '}
                <i>
                    It’s gonna be the best personal financial management app that you’ll ever use.
                    It’s a single app to help you control all your transactions, your investments,
                    even your assets and liabilities
                </i>
                . Kami jamin, lo gak bakal pusing lagi ngontrol duit lo, dan perjalanan lo untuk
                mencari-cari aplikasi finansial mana yang paling cocok buat lo, akan berhenti
                disini.
            </ManifestoText>
            <ManifestoText>
                Pendekatan Kudoku itu beda. Kami tau kalau setiap orang punya cara sendiri-sendiri
                untuk ngatur duit. Itulah kenapa Kudoku gak bakal ngebatasin lo dengan
                template-template cara ngatur keuangan. Apapun cara lo untuk mengatur keuangan lo,
                bisa lo terapin di Kudoku.
            </ManifestoText>
            <ManifestoText>
                <i>
                    We love making a better solution for you to control your personal finance in a
                    better, and joyful way
                </i>
                . Kalau lo tertarik dengan alasan lebih lengkap kami ngebuat Kudoku, lo bisa baca
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
