import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface Props {
    post: number;
    onClose: () => void;
    heading: string;
    subHeading: string;
    date: string;
    personURL: string;
    person: string;
}

export const Modal = (props: Props) => {
    const ThePost = require(`../../../../changelog/mdx/Post${props.post}.mdx`).default;

    return (
        <Transition appear show={true} as={Fragment} {...props}>
            <Dialog as="div" className="relative z-10" onClose={props.onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-90" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-[800px] transform overflow-hidden rounded-2xl bg-onPrimary pt-6 pb-12 sm:px-12 px-6 text-left align-middle shadow-xl transition-all">
                                <div className="mt-4 text-right">
                                    <button
                                        type="button"
                                        className="bg-onPrimary rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none "
                                        onClick={props.onClose}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <div className="mt-0">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="md:text-4xl text-3xl font-bold m-0 gradient-text-new">
                                            {props.heading}
                                        </h1>
                                        <h2 className="md:text-2xl text-xl font-normal text-onPrimaryContainer m-0">
                                            {props.subHeading}
                                        </h2>
                                        <div className="bg-gradient-to-br from-primary to-secondary w-fit h-fit px-2 py-0.5 rounded-md">
                                            <p className="m-0 text-onPrimary text-md">
                                                {props.date}
                                            </p>
                                        </div>
                                        <hr></hr>
                                    </div>

                                    <div className="my-14">
                                        <ThePost />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <hr className="m-0"></hr>
                                        <p className="m-0 font-[500] text-xl">Written by:</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-12 h-12">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    alt=""
                                                    src={props.personURL}
                                                    className="rounded-full"
                                                />
                                            </div>
                                            <p className="m-0 font-bold md:text-2xl text-xl gradient-text-new">
                                                {props.person}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
