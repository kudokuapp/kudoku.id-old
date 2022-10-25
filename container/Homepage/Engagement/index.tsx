import { EngagementL } from './components/EngagementL';
import { EngagementR } from './components/EngagementR';

export const Engagement = () => {
    return (
        <section className="lg:mx-6 grid md:grid-cols-3 grid-rows-1 md:gap-4 gap-8 h-max mb-12">
            <EngagementL />
            <EngagementR />
        </section>
    );
};
