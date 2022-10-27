import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom } from '@fortawesome/free-solid-svg-icons';

export const Faq = () => {
    return (
        <div className="flex flex-col items-center my-5">
            <div className="max-w-[500px]">
                <div className="flex items-center gap-4 bg-secondary rounded-t-xl px-4 py-3">
                    <FontAwesomeIcon className="text-onPrimary text-xl" icon={faBroom} />
                    <h6 className="uppercase text-onPrimary font-bold text-xl">
                        Kok kudoku cuman ada web-app?
                    </h6>
                </div>
                <div className="bg-primary bg-opacity-20 rounded-b-xl p-4">
                    <p className="font-base text-onPrimaryContainer">
                        Untuk sekarang, Kudoku cuman ada web-app yang bisa lo akses di
                        app.kudoku.id. Berhubung Kudoku ini startup baru, kami gak punya resource
                        yang banyak untuk bisa develop apps di play store atau app store (apple).
                        Yang kami bisa lakuin untuk nge-reach banyak user dan sesuai sama visi kami
                        (ngebuat semua orang seneng ngatur duit), ya kami buat web-app. Jangan
                        khawatir, web-app kudoku works exactly the same as a traditional app yang lo
                        biasa install di hp lo. Plus Kudoku bisa dipake di desktop loh, gak cuman di
                        hp seperti app traditional.
                    </p>
                </div>
            </div>
        </div>
    );
};
