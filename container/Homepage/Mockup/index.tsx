import Image from 'next/image';
import mockup from './components/images/mockup.png';

export const Mockup = () => {
    return (
        <div className="overflow-hidden min-w-[800px] mb-16 mx-auto lg:z-0 sm:z-50">
            <Image src={mockup} alt="" quality={100} />
        </div>
    );
};
