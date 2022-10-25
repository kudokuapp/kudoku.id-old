import { ExplanationL } from './components/ExplanationL';
import { ExplanationR } from './components/ExplanationR';

export const Explanation = () => {
    return (
        <section className="lg:mx-6 grid md:grid-cols-2 grid-rows-1 md:gap-4 gap-8 md:mb-16 mb-8">
            <ExplanationL />
            <ExplanationR />
        </section>
    );
};
