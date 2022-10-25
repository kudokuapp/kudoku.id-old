import { CardAccordion } from './components/CardAccordion';
import { KanbanBoard } from './components/KanbanBoard';
import { faPen, faPersonRunning, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface Props {
    data: {
        dataInProgress: any;
        dataUnderReview: any;
        dataPlanning: any;
    };
}

export const Kanban = (props: Props) => {
    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-40">
            <KanbanBoard
                color="tertiary"
                icon={faPen}
                heading="Planning"
                subheading="Feature yang lagi kita design, plan, and research yang sebentar lagi bakal kita develop."
            >
                {props.data.dataPlanning.map((item: any, index: number) => {
                    let typeArr = Array.from(item.properties.Type.multi_select).map((item: any) => {
                        return item.name;
                    });
                    return (
                        <CardAccordion
                            key={index}
                            color="tertiary"
                            type={typeArr}
                            heading={item.properties.Name.title[0].plain_text}
                            text={item.properties.Text.rich_text[0].plain_text}
                            href={item.url}
                        />
                    );
                })}
            </KanbanBoard>

            <KanbanBoard
                color="secondary"
                icon={faPersonRunning}
                heading="In Progress"
                subheading="Feature yang udah selesai di design dan lagi proses develop. Disini kita fokus ngoding bossss."
            >
                {props.data.dataInProgress.map((item: any, index: number) => {
                    let typeArr = Array.from(item.properties.Type.multi_select).map((item: any) => {
                        return item.name;
                    });
                    return (
                        <CardAccordion
                            key={index}
                            color="secondary"
                            type={typeArr}
                            heading={item.properties.Name.title[0].plain_text}
                            text={item.properties.Text.rich_text[0].plain_text}
                            href={item.url}
                        />
                    );
                })}
            </KanbanBoard>

            <KanbanBoard
                color="primary"
                icon={faMagnifyingGlass}
                heading="Under Review"
                subheading="Feature yang udah kelar di koding tapi kyknya masih ada bugs, jadi kita tes dulu bos. Kalo udah rilis, kita taro di changelog."
            >
                {props.data.dataUnderReview.map((item: any, index: number) => {
                    let typeArr = Array.from(item.properties.Type.multi_select).map((item: any) => {
                        return item.name;
                    });
                    return (
                        <CardAccordion
                            key={index}
                            color="primary"
                            type={typeArr}
                            heading={item.properties.Name.title[0].plain_text}
                            text={item.properties.Text.rich_text[0].plain_text}
                            href={item.url}
                        />
                    );
                })}
            </KanbanBoard>
        </div>
    );
};
