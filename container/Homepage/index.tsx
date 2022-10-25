import { Hero } from './Hero';
import { Engagement } from './Engagement';
import { Explanation } from './Explanation';
import { Manifesto } from './Manifesto';
import { Mockup } from './Mockup';
import { OldvsNew } from './OldvsNew';
import { Team } from './Team';
import { RegisterLayout } from '../../components/RegisterLayout';

export const HomePage = () => {
    return (
        <>
            <main className="flex flex-col h-full w-full max-w-[1400px] mx-auto lg:px-0 px-[3vmin]">
                <Hero />
                <Mockup />
                <Manifesto />
                <Explanation />
                <OldvsNew />
            </main>

            <RegisterLayout />

            <section className="flex flex-col h-full w-full max-w-[1400px] mx-auto lg:px-0 px-[3vmin]">
                <Team />
                <Engagement />
            </section>
        </>
    );
};