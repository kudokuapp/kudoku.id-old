import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export const Form = (props: any) => {
    const [text, setText] = useState('');

    return (
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <Dialog.Panel className="w-full shadow-xl rounded-3xl min-w-[300px]" as="div">
                <form onSubmit={props.handleSubmit} className="w-full">
                    <div className="w-full bg-onPrimary flex items-center justify-between rounded-3xl p-2.5 gap-4">
                        <input
                            type="text"
                            name="text"
                            className="w-full focus:outline-none"
                            placeholder="Write your comment here..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <button
                            className="bg-primary rounded-3xl px-3 py-1 w-fit h-fit shadow-2xl cursor-pointer hover:bg-onPrimaryContainer text-onPrimary text-center"
                            type="submit"
                            disabled={!text}
                            value={text}
                            onClick={props.handleClick}
                        >
                            Post
                        </button>
                    </div>
                </form>
            </Dialog.Panel>
        </Transition.Child>
    );
};
