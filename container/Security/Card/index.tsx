import { CardGrid } from './components/CardGrid';
import data from './components/data';

export const Card = () => {
    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-20">
            {data.map((item, index) => {
                return (
                    <CardGrid
                        key={index}
                        faIcon={item.faIcon}
                        classTambahan={item.classTambahan}
                        color={item.color}
                        heading={item.heading}
                    >
                        {item.children}
                    </CardGrid>
                );
            })}
        </div>
    );
};
