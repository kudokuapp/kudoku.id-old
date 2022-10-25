import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

export const Bottom = () => {
    return (
        <div className="w-full flex flex-col items-center gap-8 my-20">
            <div className="bg-primary bg-opacity-25 w-fit h-fit p-6 rounded-full">
                <FontAwesomeIcon className="text-primary text-4xl" icon={faQuestion} />
            </div>
            <h6 className="sm:text-5xl text-4xl gradient-text-new font-bold text-center leading-snug">
                Punya pertanyaan?
            </h6>
            <div className="w-fit h-fit max-w-[700px]">
                <p className="sm:text-3xl text-2xl text-onPrimaryContainer font-base text-center">
                    Kalo lo punya pertanyaan, concern, atau saran terkait keamanan, lo bisa email
                    kita di{' '}
                    <Link href="mailto:business@kudoku.id">
                        <button className="text-primary font-bold cursor-pointer animation-mantep hover:text-tertiary">
                            business@kudoku.id
                        </button>
                    </Link>
                </p>
            </div>
        </div>
    );
};
