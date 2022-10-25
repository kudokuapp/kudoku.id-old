import data from './data';
import oldImage from './images/old.png';
import Image from 'next/image';

export const Old = () => {
    return (
        <section className="bg-onPrimary flex flex-col items-center mx-auto w-full h-full sm:p-8 p-4 rounded-xl border-[1px] border-outline">
            <Bar />
            <h3 className="font-bold text-outline text-3xl mt-4 mb-0 text-center sm:max-w-[550px] min-h-fit sm:min-h-[108px] lg:min-h-fit">
                Pusing karena lo ngerasa ribet ngatur duit.
            </h3>
            <div className="my-8">
                <Image src={oldImage} alt="" quality={100} />
            </div>
            <div className="w-full">
                <ul className="flex flex-col gap-4">
                    {data.map((item, index) => {
                        return (
                            <li className="list-none flex items-start" key={index}>
                                <Icon />
                                <p className="text-outline ml-2 text-lg text-left xl:min-h-fit lg:min-h-[56px] md:min-h-[84px] min-h-fit w-full">
                                    <span className="font-bold">{item.old[0]}</span> {item.old[1]}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

const Bar = () => {
    return (
        <div className="bg-outline rounded-3xl px-3 py-1 w-fit h-fit">
            <p className="font-bold text-onPrimary">SEBELUM PAKE KUDOKU</p>
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
            <rect y="0.789795" width="30" height="30" rx="15" fill="#74777F" />
            <path
                d="M22 10.1998L20.59 8.78979L15 14.3798L9.41 8.78979L8 10.1998L13.59 15.7898L8 21.3798L9.41 22.7898L15 17.1998L20.59 22.7898L22 21.3798L16.41 15.7898L22 10.1998Z"
                fill="white"
            />
        </svg>
    );
};
