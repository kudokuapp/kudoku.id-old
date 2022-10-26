import IntelligentCalendar from '../../../components/IntelligentCalendar';
import data from './components/data';

export const IntelligentExpense = () => {
    return (
        <>
            <IntelligentCalendar items={data} />
        </>
    );
};
