import { Header } from './Header';
import { Post } from './Post';
import { RegisterLayout } from '../../components/RegisterLayout';
import type { Props } from './Post';

export const Changelog = (props: Props) => {
    return (
        <>
            <main className="max-w-[800px] mx-auto mt-10 pb-20 md:px-0 sm:px-10 px-4">
                <Header />
                <Post
                    post={props.post}
                    heading={props.heading}
                    subHeading={props.subHeading}
                    date={props.date}
                    person={props.person}
                    personURL={props.personURL}
                    onClose={props.onClose}
                    data={props.data}
                />
            </main>

            <RegisterLayout />
        </>
    );
};
