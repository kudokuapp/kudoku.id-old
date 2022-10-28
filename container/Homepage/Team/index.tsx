import Furqon from './components/cal/Furqon';
import Rizqy from './components/cal/Rizqy';
import Aldi from './components/cal/Aldi';

export const Team = () => {
    return (
        <section className="h-max lg:mx-6 md:mb-16 mb-8">
            <div className="card-main bg-primary lg:px-16 lg:py-14 sm:px-12 sm:py-10 px-8 py-8">
                <h5 className="text-onPrimary text-center sm:text-4xl text-3xl font-bold">
                    Tanya-tanya tentang Kudoku
                </h5>
                <div className="mt-4">
                    <h6 className="text-onPrimary sm:text-2xl text-xl font-[500] text-center">
                        Buat lo yang penasaran, lo bisa pilih waktu buat ngobrol sama yang ngebuat
                        Kudoku.
                    </h6>
                    <h6 className="text-onPrimary sm:text-2xl text-xl font-[500] text-center">
                        Kita bisa diskusi apa aja tentang aplikasi finansial yang{' '}
                        <span className="font-bold">paling keren</span> ini.
                    </h6>
                </div>

                <div className="grid md:grid-cols-3 sm:gap-8 gap-6 justify-items-center mt-20">
                    <Furqon />
                    <Rizqy />
                    <Aldi />
                </div>
            </div>
        </section>
    );
};
