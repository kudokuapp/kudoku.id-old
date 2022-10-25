import { LockIcon } from './components/LockIcon';

export const Header = () => {
    return (
        <div className="flex flex-col items-center gap-0">
            <LockIcon />
            <div className="flex flex-col items-center m-0 gap-12">
                <h1 className="gradient-text-new m-0 md:text-6xl text-4xl leading-snug">
                    Siap Lapor 24/7
                </h1>
                <div className="flex flex-col items-center m-0 max-w-[800px] gap-8">
                    <p className="text-center font-base md:text-2xl text-xl m-0">
                        Ketika kita ngomongin fintek (finansial teknologi), keamanan aplikasi gabisa
                        dipikirin di akhir. Keamanan harus menjadi jantung dan tulang punggung
                        aplikasi tersebut dari awal.
                    </p>
                    <p className="text-center font-base md:text-2xl text-xl m-0">
                        Dan di Kudoku, kemanan menjadi prioritas kita nomor satu. Dibawah ini lo
                        bisa liat beberapa cara kita untuk memastikan data lo 100% aman.
                    </p>
                </div>
            </div>
        </div>
    );
};
