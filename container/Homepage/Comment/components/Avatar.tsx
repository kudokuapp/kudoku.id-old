import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { ReplyForm } from './ReplyForm';
import { TwitterButton } from './TwitterButton';
import { CommentCard } from './CommentCard';
import { UserAuth } from '../../../../context/AuthContext';

interface DataReply {
    email: string | null | undefined;
    kudosNo: string | number | null;
    imageURL: string;
    fullName: string;
    date: Date | number | string;
    text: string | null;
    twitterHandle: string;
}

export const Avatar = (props: {
    keyId: any;
    replies: any[];
    fullname: string;
    imgsrc: string | undefined;
    state: string;
    kudosid: string | number | null;
    commentdate: number | Date;
    comment: string;
    twitterHandle: string;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [newReply, setNewReply] = useState(false);
    const [dataNewReply, setDataNewReply] = useState({} as DataReply);

    const { user, kudos, twitterHandle } = UserAuth();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const data = {
            parentId: props.keyId,
            text: event.target.text.value,
            email: user?.email,
            fullName: user?.displayName,
            kudosNo: kudos ? Number(kudos) : null,
            imageURL: user?.photoURL,
            date: new Date(),
            twitterHandle: twitterHandle,
        };

        event.target.text.value = '';

        const JSONdata = JSON.stringify(data);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        };

        const response = await fetch('/api/comment/post', options);
        const result = await response.json();
    };

    const handleClick = (event: any) => {
        const data = {
            text: event?.target.value,
            email: user?.email,
            fullName: user?.displayName,
            kudosNo: kudos ? Number(kudos) : null,
            imageURL: user?.photoURL,
            date: new Date(),
            twitterHandle: twitterHandle,
        } as DataReply;

        setDataNewReply(data);

        setNewReply(true);
    };

    const renderNewComment = () => {
        if (newReply) {
            return (
                <CommentCard
                    kudosid={dataNewReply.kudosNo ? dataNewReply.kudosNo : null}
                    imgsrc={dataNewReply.imageURL}
                    fullname={dataNewReply.fullName}
                    commentdate={new Date(dataNewReply.date)}
                    comment={dataNewReply.text}
                    twitterHandle={dataNewReply.twitterHandle}
                />
            );
        }
    };

    const renderNotification = () => {
        if (props.replies.length > 0) {
            return (
                <div className="absolute w-[20px] h-[20px] bg-tertiary flex items-center justify-center rounded-full border-[1px] border-primary right-0 top-0">
                    <p className="text-onPrimary text-xs">{props.replies.length}</p>
                </div>
            );
        }
    };

    const renderButton = () => {
        if (isOpen) {
            return (
                <button
                    onClick={() => setIsOpen(false)}
                    className="min-w-[34px] w-[34px] min-h-[34px] h-[34px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[8px] border-2 border-primary bg-primary flex items-center justify-center shadow-sm animation-mantep"
                    style={{ overflow: 'hidden' }}
                >
                    <div className="w-[34px] h-[34px] flex flex-col items-center justify-center p-2">
                        <FontAwesomeIcon
                            className="text-onPrimary text-xl fade-in"
                            icon={faClose}
                        />
                    </div>
                </button>
            );
        } else {
            return (
                <div className="relative animation-popup">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="min-w-[34px] w-[34px] min-h-[34px] h-[34px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[8px] border-2 border-primary bg-primary flex items-center justify-center shadow-sm"
                        style={{ overflow: 'hidden' }}
                    >
                        {renderNotification()}
                        <div className="w-[34px] h-[34px] flex flex-col items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                alt={`${props.fullname} Avatar`}
                                src={props.imgsrc}
                                width={34}
                                height={34}
                            />
                        </div>
                    </button>
                </div>
            );
        }
    };

    const renderForm = () => {
        if (props.state === 'true') {
            return (
                <ReplyForm
                    keyId={props.keyId}
                    handleSubmit={handleSubmit}
                    handleClick={handleClick}
                />
            );
        } else {
            return <TwitterButton type="comment" />;
        }
    };

    return (
        <>
            {renderButton()}

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 h-[100vh] w-[100vw] z-20 overflow-auto"
                    onClose={() => setIsOpen(false)}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed h-[100vh] w-[100vw] inset-0 bg-background bg-opacity-90" />
                    </Transition.Child>

                    <div className="relative flex flex-col items-center justify-center min-h-[100vh] py-[25vh] w-full overflow-y-auto m-auto gap-4 sm:px-0 px-4">
                        <CommentCard
                            kudosid={props.kudosid}
                            imgsrc={props.imgsrc}
                            fullname={props.fullname}
                            commentdate={props.commentdate}
                            comment={props.comment}
                            twitterHandle={props.twitterHandle}
                        />
                        <div className="relative flex flex-col items-end pl-[30px] justify-center w-full min-w-[300px] max-w-[400px] gap-4">
                            {props.replies.length > 0 &&
                                props.replies.map((comment) => {
                                    return (
                                        <CommentCard
                                            key={comment.id}
                                            kudosid={comment.kudosno ? comment.kudosno : null}
                                            imgsrc={comment.imagesrc}
                                            fullname={comment.fullname}
                                            commentdate={new Date(comment.commentdate)}
                                            comment={comment.comment}
                                            twitterHandle={comment.twitterhandle}
                                        />
                                    );
                                })}

                            {renderNewComment()}

                            <Dialog.Panel className="w-full h-full">
                                <div className="mt-4 h-full w-full">{renderForm()}</div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
