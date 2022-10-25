import Image from 'next/image';
import Link from 'next/link';

interface Props {
    link: number;
    title: string;
    subtitle: string;
    date: string;
    personName: string;
    personImgSrc: string;
}

export const CardSummary = (props: Props) => {
    const imgSrc = require(`../../../../changelog/images/Image${props.link}.jpg`).default;
    return (
        <Link href={`/changelog/?post=${props.link}`} as={`/changelog/${props.link}`} {...props}>
            <button
                className={`w-full h-fit bg-onPrimary rounded-lg shadow-md animation-popup pb-6 overflow-hidden cursor-pointer`}
            >
                <div className="mb-8 rounded-lg" style={{ overflow: 'hidden' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image alt="" src={imgSrc} width={800} height={450} />
                </div>
                <div className="px-4">
                    <div className="mb-14">
                        <h4 className="text-onPrimaryContainer text-left font-bold text-xl mb-4">
                            {props.title}
                        </h4>
                        <p className="text-onPrimaryContainer text-left font-light text-xl">
                            {props.subtitle}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="bg-secondaryContainer px-2 py-0.5 rounded-md border-[1px] border-outline">
                            <p className="text-onSecondaryContainer text-left text-sm m-0">
                                {props.date}
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-2">
                            <p className="m-0 text-sm text-primary">{props.personName}</p>
                            <div className="w-8 h-8">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt="" src={props.personImgSrc} className="rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </Link>
    );
};
