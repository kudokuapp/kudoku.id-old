import Link from 'next/link';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { UrlObject } from 'url';

export const AnnoucementBtn = (props: {
    link: string | UrlObject;
    children:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal;
}) => {
    return (
        <Link href={props.link}>
            <button className="flex items-center gap-2 rounded-lg animation-popup shadow-[0px_0px_20px_#2C5EA8] border-[1px] border-primary bg-onPrimaryContainer text-white px-4 py-1 font-bold text-sm my-4">
                {props.children} <Icon />
            </button>
        </Link>
    );
};

const Icon = () => {
    return (
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
    );
};
