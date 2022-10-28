import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

export const FormHeader = () => {
    return (
        <div className="flex flex-col items-center gap-4 px-8">
            <FontAwesomeIcon className="text-primary md:text-6xl text-4xl" icon={faPencil} />
            <h6 className="md:text-4xl text-2xl text-onPrimaryContainer text-center font-bold">
                Influence our roadmap
            </h6>
            <p className="max-w-[600px] md:text-2xl text-xl text-onPrimaryContainer text-center">
                Punya ide, masukan, saran, atau apapun itu? Kasih tau kami dengan mengisi form
                dibawah ini! Atau lo juga bisa kirim email ke tim Kudoku di{' '}
                <Link href="mailto:business@kudoku.id">
                    <button className="font-bold text-primary cursor-pointer animation-mantep hover:text-tertiary hover:ml-3 animation-popup">
                        business@kudoku.id
                    </button>
                </Link>
            </p>
        </div>
    );
};
