import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CardGrid = ({
    faIcon,
    classTambahan = 'h-fit',
    color,
    heading,
    children,
}: {
    faIcon: IconProp;
    classTambahan: string;
    color: number;
    heading: string;
    children: JSX.Element;
}) => {
    let bgOpacity25, textColor;
    switch (color) {
        case 1:
            bgOpacity25 = 'bg-[#FBF2C0]/25';
            textColor = 'text-[#FBF2C0]';
            break;
        case 2:
            bgOpacity25 = 'bg-[#DA4167]/25';
            textColor = 'text-[#DA4167]';
            break;
        case 3:
            bgOpacity25 = 'bg-[#F0BCD4]/25';
            textColor = 'text-[#F0BCD4]';
            break;
        case 4:
            bgOpacity25 = 'bg-[#4A6C6F]/25';
            textColor = 'text-[#4A6C6F]';
            break;
        case 5:
            bgOpacity25 = 'bg-[#AF5D63]/25';
            textColor = 'text-[#AF5D63]';
            break;
        case 6:
            bgOpacity25 = 'bg-[#AFDEDC]/25';
            textColor = 'text-[#AFDEDC]';
            break;
        case 7:
            bgOpacity25 = 'bg-[#D8CC34]/25';
            textColor = 'text-[#D8CC34]';
            break;
        case 8:
            bgOpacity25 = 'bg-[#33658A]/25';
            textColor = 'text-[#33658A]';
            break;
        case 9:
            bgOpacity25 = 'bg-[#6247AA]/25';
            textColor = 'text-[#6247AA]';
            break;
    }
    return (
        <div className={`bg-neutralOnBackground px-8 py-10 w-fit ${classTambahan} rounded-2xl`}>
            <div className={`${bgOpacity25} w-fit h-fit p-4 rounded-2xl`}>
                <FontAwesomeIcon className={`${textColor} text-4xl`} icon={faIcon} />
            </div>
            <h6 className="text-3xl text-onPrimary font-bold my-4">{heading}</h6>
            <div>{children}</div>
        </div>
    );
};
