import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faClose } from '@fortawesome/free-solid-svg-icons';
import { JoinTheThreadIcon, CommentOnSectionIcon } from './Icon';
import { TwitterButton } from './TwitterButton';

export const SignInButton = () => {
    let [isOpen, setIsOpen] = useState(false);

    const renderButton = () => {
        if (isOpen) {
            return (
                <button
                    onClick={() => setIsOpen(false)}
                    className="min-w-[34px] w-[34px] min-h-[34px] h-[34px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[8px] border-2 border-primary bg-primary flex items-center justify-center shadow-sm hover:opacity-70"
                    style={{ overflow: 'hidden' }}
                >
                    <div className="w-[34px] h-[34px] flex flex-col items-center justify-center p-2 bg-onPrimaryContainer">
                        <FontAwesomeIcon
                            className="text-onPrimary text-xl fade-in"
                            icon={faClose}
                        />
                    </div>
                </button>
            );
        } else {
            return (
                <button
                    onClick={() => setIsOpen(true)}
                    className="min-w-[34px] w-[34px] min-h-[34px] h-[34px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[8px] border-2 border-primary bg-primary flex items-center justify-center shadow-sm hover:opacity-70"
                    style={{ overflow: 'hidden' }}
                >
                    <div className="w-[34px] h-[34px] flex flex-col items-center justify-center p-2 bg-onPrimaryContainer">
                        <FontAwesomeIcon className="text-onPrimary text-xl fade-in" icon={faPlus} />
                    </div>
                </button>
            );
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

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full sm:items-center items-start justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg sm:max-h-[100vh] max-h-[86vh] transform overflow-hidden rounded-2xl bg-white sm:p-6 p-4 text-left align-middle shadow-xl transition-all overflow-y-auto">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-bold leading-6 text-onPrimaryContainer">
                                            Masuk pake akun Twitter kamu untuk lanjut
                                        </h3>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="w-fit h-fit rounded-full text-onPrimaryContainer hover:bg-onPrimaryContainer/10 hover:text-tertiary py-1 px-2"
                                        >
                                            <FontAwesomeIcon
                                                icon={faClose}
                                                className="text-xl p-0"
                                            />
                                        </button>
                                    </div>
                                    <div className="mt-2 flex gap-2 flex-wrap sm:justify-between justify-center w-full bg-onPrimaryContainer/10 items-center p-2 rounded-2xl">
                                        <div className="bg-onPrimaryContainer/30 w-full h-full sm:max-w-[200px] rounded-xl flex flex-col items-center justify-center px-4 pt-6 pb-4">
                                            <CommentOnSectionIcon />
                                            <p className="font-[500] text-base text-center text-onPrimaryContainer/60 mt-2">
                                                Ikut komen di website
                                            </p>
                                        </div>
                                        <div className="bg-onPrimaryContainer/30 w-full h-full sm:max-w-[200px] rounded-xl flex flex-col items-center justify-center px-4 pt-6 pb-4">
                                            <JoinTheThreadIcon />
                                            <p className="font-[500] text-base text-center text-onPrimaryContainer/60 mt-2">
                                                Reply komen orang lain
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <TwitterButton type={'signin'} />
                                    </div>
                                    <p className="text-xs font-light text-onPrimaryContainer text-center mt-8">
                                        Dengan masuk pake akun Twitter kamu, ketika kamu komen, kamu
                                        juga akan nge-tweet di akun Twitter kamu. Kami gapunya akses
                                        apa-apa di Twitter kamu.
                                    </p>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
