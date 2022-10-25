import { TopFooter } from './components/TopFooter';
import { BottomFooter } from './components/BottomFooter';

export const Footer = () => {
    return (
        <footer className="sm:px-8 px-4 mt-16 pb-20 sm:pb-28">
            <TopFooter />
            <BottomFooter />
        </footer>
    );
};
