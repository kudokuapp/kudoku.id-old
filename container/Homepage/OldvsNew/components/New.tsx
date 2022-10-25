import data from './data';
import newImage from './images/new.png';
import Image from 'next/image';

export const New = () => {
    return (
        <div className="h-full w-full rounded-lg bg-gradient-to-br from-primary via-tertiary to-secondary p-1 shadow-lg">
            <section className="rounded-lg flex flex-col h-full w-full items-center justify-center bg-onPrimary back sm:p-8 p-4">
                <Bar />
                <h3 className="font-bold text-onPrimaryContainer text-3xl mt-4 mb-0 text-center min-h-fit sm:min-h-[108px] lg:min-h-fit">
                    Kudoku bikin lo ahli mengatur aktifitas keuangan lo.
                </h3>
                <div className="my-8">
                    <Image src={newImage} alt="" quality={100} />
                </div>
                <div className="w-full">
                    <ul className="flex flex-col gap-4">
                        {data.map((item, index) => {
                            return (
                                <li className="list-none flex items-start" key={index}>
                                    <Icon />
                                    <p className="text-onPrimaryContainer ml-2 text-lg text-left xl:min-h-fit lg:min-h-[56px] md:min-h-[84px] min-h-fit w-full">
                                        <span className="font-bold">{item.new[0]}</span>{' '}
                                        {item.new[1]}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </div>
    );
};

const Bar = () => {
    return (
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl px-3 py-1 w-fit h-fit">
            <p className="font-bold text-onPrimary">SETELAH PAKE KUDOKU</p>
        </div>
    );
};

const Icon = () => {
    return (
        <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect y="0.224548" width="30" height="30" rx="15" fill="url(#paint0_linear_15_1462)" />
            <path
                d="M9.48374 14.6362L9.13143 14.2839L8.77789 14.635L7.6477 15.7572L7.29164 16.1107L7.64645 16.4655L12.0956 20.9147L12.4491 21.2682L12.8027 20.9147L22.3536 11.3638L22.7071 11.0102L22.3536 10.6567L21.2313 9.53445L20.8779 9.18106L20.5244 9.53428L12.4493 17.6018L9.48374 14.6362Z"
                fill="white"
                stroke="white"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_15_1462"
                    x1="0.5"
                    y1="14.8761"
                    x2="30.5"
                    y2="14.8761"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#2C5EA8" />
                    <stop offset="1" stopColor="#348A95" />
                </linearGradient>
            </defs>
        </svg>
    );
};
