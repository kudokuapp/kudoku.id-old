import Link from 'next/link';
import { ClassAttributes, ButtonHTMLAttributes } from 'react';
import { getCurrentYear } from '../../../utils/helper/date';

export const BottomFooter = () => {
    return (
        <div className="md:flex justify-between items-end sm:mt-14 mt-6 flex-wrap gap-10">
            <div>
                <ul className="flex flex-wrap sm:gap-6 gap-4 list-none md:mb-0 mb-12">
                    <li>
                        <button className="w-max h-max text-sm sm:text-base transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200">
                            <Link href="/imprint" passHref={true}>
                                <a
                                    target="_self"
                                    rel="noopener noreferrer"
                                    className="no-underline text-onPrimaryContainer hover:text-primary"
                                >
                                    Imprint
                                </a>
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className="w-max h-max  text-sm sm:text-base transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200">
                            <Link href="/terms" passHref={true}>
                                <a
                                    target="_self"
                                    rel="noopener noreferrer"
                                    className="no-underline text-onPrimaryContainer hover:text-primary"
                                >
                                    Ketentuan Layanan
                                </a>
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className="w-max h-max  text-sm sm:text-base transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200">
                            <Link href="/privacy" passHref={true}>
                                <a
                                    target="_self"
                                    rel="noopener noreferrer"
                                    className="no-underline text-onPrimaryContainer hover:text-primary"
                                >
                                    Kebijakan Privasi
                                </a>
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className="w-max h-max  text-sm sm:text-base transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200">
                            <Link href="/manifesto" passHref={true}>
                                <a
                                    target="_self"
                                    rel="noopener noreferrer"
                                    className="no-underline text-onPrimaryContainer hover:text-primary"
                                >
                                    Manifesto
                                </a>
                            </Link>
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="list-none md:mb-0 mb-12">
                    <li>
                        <p className="text-onPrimaryContainer sm:mt-0 mt-4">
                            {getCurrentYear()} PT. Kudoku Finansial Indonesia
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};
