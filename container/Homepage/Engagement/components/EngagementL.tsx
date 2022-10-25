import Image from 'next/image';
import Link from 'next/link';
import socialmedia from './socialmedia';

export const EngagementL = () => {
    return (
        <section className="card-main bg-onPrimary md:col-span-2 lg:px-16 lg:py-14 sm:px-12 sm:py-10 px-8 py-8 self-stretch">
            <div>
                <h2 className="text-center sm:text-4xl text-3xl font-bold text-primary">
                    Ikuti perjalanan Kudoku
                </h2>
                <h3 className="text-secondary sm:text-2xl text-center font-[500] sm:mt-10 text-xl mt-4">
                    Follow Kudoku di social media biar kita sama-sama bangun aplikasi terkeren di
                    muka bumi ini.
                </h3>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-y-10 md:gap-y-2 gap-y-6 md:gap-x-8 gap-x-6 justify-items-center sm:mt-16 mt-10">
                {socialmedia.map((item, index) => {
                    return (
                        <Link href={item.link} key={index} passHref>
                            <a target="_blank" rel="noopener noreferrer" className="no-underline">
                                <button className="cursor-pointer flex items-center w-fit h-fit px-2 py-1.5 rounded-lg shadow-md hover:bg-primary bg-onPrimaryContainer animation-popup">
                                    <Image
                                        src={item.imgSrc}
                                        width={40}
                                        layout="fixed"
                                        alt={item.alt}
                                    />
                                    <p className="ml-2 text-onPrimary">{item.name}</p>
                                </button>
                            </a>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};
