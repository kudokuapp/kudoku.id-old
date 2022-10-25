import { Header } from './Header';
import { Card } from './Card';
import { Bottom } from './Bottom';
import { RegisterLayout } from '../../components/RegisterLayout';

export const Security = () => {
    return (
        <>
            <main className="flex flex-col h-full w-full max-w-[1400px] mx-auto lg:px-0 px-[3vmin]">
                <Header />
                <Card />
                <Bottom />
            </main>
            <RegisterLayout />
        </>
    );
};
