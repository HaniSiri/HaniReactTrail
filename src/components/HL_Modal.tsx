import React, { useRef, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import XMarkIcon from "../assets/close.svg";
import loginPageData from '../data/loginPageData.json';
import HL_PrimaryButton from "./HL_PrimaryButton.tsx";

interface ModalProp {
    open: Boolean
    setOpen: Function
}

const HL_Modal = ({ open, setOpen }: ModalProp) => {

    const [emailError, setemailError] = useState(null);
    const emailRef = useRef({ current: {} });

    function checkEmailError() {
        let email = emailRef.current.value;
        let currentClasses = emailRef.current?.className;
        if (email.length === 0) {
            setemailError(loginPageData.form.email.errorMessages.missing);
            emailRef.current.className = currentClasses.replace('border-black', 'border-red-600');
        } else if (!email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            setemailError(loginPageData.form.email.errorMessages.invald);
            emailRef.current.className = currentClasses.replace('border-black', 'border-red-700');
        } else {
            setemailError(null);
            emailRef.current.className = currentClasses.replace('border-red-700', 'border-black');
        }
    }


    function closePopup() {
        setOpen(false);
    }

    return (
        <Transition show={open}>
            <Dialog className="relative z-10" onClose={() => { setOpen() }}>
                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex h-full items-end justify-end text-center sm:items-center sm:p-0">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel className="relative h-full transform overflow-auto bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg flex flex-col justify-between">
                                <div>
                                    <div className='px-8 py-6 border-b-2 flex items-center justify-between'>
                                        <DialogTitle as="h3" className="text-2xl custom-font-bd font-extrabold secondary-text-color  align text-center">
                                            Forgot your password?
                                        </DialogTitle>
                                        <img className='h-6 w-6 primary-color stroke-2' src={XMarkIcon} alt="" onClick={() => { closePopup() }} />
                                        {/* <XMarkIcon className='h-6 w-6 primary-color stroke-2' onClick={closePopup} /> */}
                                    </div>
                                    <div className='popup-body p-8'>
                                        <p className="text-black">
                                            No problem. Just enter your email, and we'll send you a link to reset your password.
                                        </p>
                                        <div className='mt-5'>
                                            <label className='block mb-1' for={loginPageData.form.email.label}>{loginPageData.form.email.label}{loginPageData.form.email.required ? '*' : ''}</label>
                                            <input
                                                className='w-full min-h-14 p-2 border rounded border-black'
                                                name={loginPageData.form.email.label}
                                                type='text' placeholder={loginPageData.form.email.placeholder}
                                                ref={emailRef}
                                                onChange={checkEmailError}></input>
                                            <div className='error-messages text-red-700 text-sm pt-2'>
                                                {emailError}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center w-full p-6 modal-footer-shadow">
                                    <HL_PrimaryButton ButtonLabel="Send Link" classProp="w-[100%]" handleButtonClick={(event: MouseEvent) => { setOpen(false) }} />
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default HL_Modal