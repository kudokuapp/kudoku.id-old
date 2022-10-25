import { Header } from './Header';
import { Kanban } from './Kanban';
import { Announcement } from './Announcement';
import { Faq } from './Faq';
import { Form } from './Form';
import { RegisterLayout } from '../../components/RegisterLayout';

export const Roadmap = (props: {
    data: { dataInProgress: any; dataUnderReview: any; dataPlanning: any };
}) => {
    return (
        <>
            <main className="flex flex-col h-full w-full max-w-[1400px] mx-auto lg:px-0 px-[3vmin]">
                <Header />
                <Kanban data={props.data} />
                <Announcement />
                <Faq />
                <Form />
            </main>
            <RegisterLayout />
        </>
    );
};
