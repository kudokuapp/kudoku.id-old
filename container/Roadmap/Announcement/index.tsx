import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

export const Announcement = () => {
    return (
        <div className="flex flex-col items-center my-5">
            <div className="max-w-[500px]">
                <div className="flex items-center gap-4 bg-primary rounded-t-xl px-4 py-3">
                    <FontAwesomeIcon className="text-onPrimary text-xl" icon={faCalendar} />
                    <h6 className="uppercase text-onPrimary font-bold text-xl">
                        Kapan Kudoku rilis feature [X]?
                    </h6>
                </div>
                <div className="bg-primary bg-opacity-20 rounded-b-xl p-4">
                    <p className="font-base text-onPrimaryContainer">
                        Kita sengaja gak ngasih deadline untuk semua feature release kita. Kenapa?
                        Karena kita mau under promise over deliver. Kita gamau ngasih unmet
                        expectations ke lo sebagai user dan ke tim Kudoku sendiri. Terlalu banyak
                        unknown variable untuk ngasih waktu kapan feature tertentu release. Yang
                        penting, kita kerja as fast as possible given finite time and money.
                    </p>
                </div>
            </div>
        </div>
    );
};
