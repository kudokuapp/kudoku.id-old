import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo/variant2.svg';
import Logo2 from './Logo/primary.svg';
import { Tooltip } from '../Tooltip';
import { ClassAttributes, ButtonHTMLAttributes } from 'react';

export const Navbar = ({ tooltip = false, shakeit = false }) => {
    const renderButton = () => {
        if (shakeit) {
            const handleShake = () => {
                let d = document.getElementById('placeholder');
                d?.classList.add('shakeit__link');
                setTimeout(() => d?.classList.remove('shakeit__link'), 3000);
            };

            return <Button onClick={handleShake} />;
        } else if (tooltip) {
            return (
                <Tooltip text="Kamu lagi ada di form registrasi Kudoku nih! Yuk selesain biar kamu jadi Kudos!">
                    <Button disabled />
                </Tooltip>
            );
        } else {
            return (
                <Link href="/" passHref>
                    <a className="no-underline">
                        <Button />
                    </a>
                </Link>
            );
        }
    };

    return (
        <nav className="flex justify-between flex-nowrap items-center my-0 mx-auto pt-10 sm:pb-2 sm:pl-10 sm:pr-16 px-4 w-full">
            <div className="items-center max-w-[10rem] sm:flex hidden cursor-pointer select-none">
                <Link href="/" passHref>
                    <a className="no-underline">
                        <Image src={Logo} alt="Kudoku Logo" />
                    </a>
                </Link>
            </div>
            <div className="items-center max-w-[3rem] sm:hidden flex cursor-pointer select-none">
                <Link href="/" passHref>
                    <a className="no-underline">
                        <Image src={Logo2} alt="Kudoku Logo" />
                    </a>
                </Link>
            </div>
            <div className="flex items-center sm:gap-4 gap-2">
                <a
                    className="font-bold hover:opacity-75 sm:text-lg text-md select-none no-underline text-onPrimaryContainer hover:text-onPrimaryContainer"
                    href="https://app.kudoku.id/"
                >
                    Masuk
                </a>
                {renderButton()}
            </div>
        </nav>
    );
};

const Button = (
    props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLButtonElement> &
        ButtonHTMLAttributes<HTMLButtonElement>
) => {
    return (
        <button
            className="bg-gradient-to-br from-primary to-secondary sm:text-lg text-md select-none flex items-center cursor-pointer text-onPrimary px-2.5 py-1 sm:rounded-xl rounded-lg gap-2 hover:opacity-75"
            {...props}
        >
            <span className="font-[500]">Daftar sekarang</span>
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
    );
};
