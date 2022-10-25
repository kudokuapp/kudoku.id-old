import { CardSummary } from './components/CardSummary';
import { getFullDate } from '../../../utils/helper/date';
import { Modal } from './components/Modal';

export interface Props {
    post: number;
    heading: string;
    subHeading: string;
    date: string;
    person: string;
    personURL: string;
    onClose: () => void;
    data: {
        dataDesc: [];
    };
}

export const Post = (props: Props) => {
    return (
        <>
            {props.post && (
                <Modal
                    heading={props.heading}
                    subHeading={props.subHeading}
                    date={props.date}
                    person={props.person}
                    personURL={props.personURL}
                    onClose={props.onClose}
                    post={props.post}
                />
            )}
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-12 mt-16">
                {props.data.dataDesc.map((item: any, index: number) => {
                    return (
                        <CardSummary
                            link={item.properties.URL.number}
                            title={item.properties.Name.title[0].text.content}
                            subtitle={item.properties['Sub Heading'].rich_text[0].plain_text}
                            date={getFullDate(item.properties['Published Date'].date.start)}
                            personName={item.properties.Person.people[0].name}
                            personImgSrc={item.properties.Person.people[0].avatar_url}
                            key={index}
                        />
                    );
                })}
            </div>
        </>
    );
};
