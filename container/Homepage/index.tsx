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
            <main className="h-full w-full mx-auto max-w-[1400px] px-2">
                <Hero />
            </main>
            <section className="flex flex-col h-full w-full max-w-[1400px] mx-auto lg:px-0 px-[3vmin]">
                <Mockup />
                <Manifesto />
                <Explanation />
                <OldvsNew />
                {/* <IntelligentExpense /> */}
            </section>

            <RegisterLayout />

            <section className="flex flex-col h-full w-full max-w-[1400px] mx-auto lg:px-0 px-[3vmin]">
                <Team />
                <Engagement />
            </section>
        </>
    );
};
