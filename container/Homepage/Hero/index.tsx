import axios from 'axios';
import { useState, useEffect } from 'react';
import { Placeholder } from '../../../components/Placeholder';
import { Tooltip } from '../../../components/Tooltip';
import { AnnoucementBtn } from './components/AnnouncementBtn';

export const Hero = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        (async function () {
            const response = await axios.get('https://webhook.kudoku.id/api/checkid');

            setData(response.data.id);
        })();
    }, []);

    return (
        <section className="h-max md:mb-6 mb-8 mt-8 flex flex-col items-center justify-center">
            <AnnoucementBtn link="/manifesto">Baca kenapa kami buat Kudoku</AnnoucementBtn>
            <div className="sm:gap-0 gap-6 lg:py-14 sm:py-10 py-6">
                <div className="sm:mt-6 px-0">
                    <h1 className="gradient-text-new text-5xl sm:text-7xl font-bold sm:leading-snug leading-snug text-center my-0 px-4">
                        Stop cari aplikasi yang lain.
                    </h1>
                    <h2 className="text-center font-[500] text-xl sm:text-3xl text-onPrimaryContainer my-0 mt-4 px-4">
                        Kenalin Kudoku,{' '}
                        <span className="font-bold">aplikasi pengelola keuangan</span> yang fiturnya
                        paling mantep.
                    </h2>
                    <div className="sm:my-16 my-8 w-full">
                        <Placeholder type={'normal'} />
                        <div className="mt-8 text-center font-[500] sm:text-lg text-base flex gap-1.5 justify-center">
                            <p>Kamu akan jadi</p>
                            <Tooltip text="Kudos adalah panggilan untuk user Kudoku">
                                <p className="bg-gradient-to-r from-primary to-secondary rounded-md text-onPrimary px-1 py-0.25 mb-0">
                                    Kudos No. {data}
                                </p>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
