import { Old } from './components/Old';
import { New } from './components/New';

export const OldvsNew = () => {
    return (
        <section className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-20 mb-20">
            <Old />
            <New />
        </section>
    );
};
