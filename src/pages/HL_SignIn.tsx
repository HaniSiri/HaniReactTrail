import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import PrimaryButton from "../components/HL_PrimaryButton.tsx";
import Modal from "../components/HL_Modal.tsx";
import "../styles/Signinpage.css";
type FormValues = {
    email: String
    password: String
}

const HL_SignIn = () => {
    const [open, setOpen] = useState(false);

    const form = useForm<FormValues>({
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const { register, handleSubmit, control, formState } = form;
    const { errors } = formState;
    const onSubmit = (data: FormValues) => {
        console.log('onSubmit data ', data);
    }
    const handleSubmitButton = (event: MouseEvent) => {
        console.log('handleSubmitButton ', event);

    }
    const handleForgotPassword = (event: React.MouseEvent) => {
        console.log('event ', event);
        setOpen(true);
    }
    return (<>
        <div className='grid grid-cols-12 gap-x-4 px-7 lg:px-20 pt-8 pb-12 lg:pb-24'>
            <div className='secondary-text-color col-span-12 lg:col-span-5 mt-12 lg:mt-0 text-3xl lg:text-4xl lg:order-none order-last'>
                <h1 className='section-heading font-bold pb-4'>Member Benefits</h1>
                <p>The key to unlocking success lies in the power of personal connection. That's why by combining our products with the know-how and support of our Herbalife Independent Distributors.</p>
            </div>
            <div className='col-span-12 lg:col-span-1 flex justify-center order-1 lg:order-none'>
                <div className='w-full lg:w-[1px] section-seperator h-[1px] lg:h-[520px]'></div>
            </div>
            <div className='form-container col-span-12 lg:col-span-6 lg:pl-12 mb-12 lg:mb-0'>
                <h1 className='secondary-text-color text-4xl font-bold text-3xl lg:text-4xl'>Sign in</h1>
                <div className='body mt-4 mb-12 pb-4 flex border-b border-gray-thin flex-wrap'>
                    <p className='pr-3 color-black'>New to Herbalife?</p>
                    <a href='/' className='underline'>Create an Account</a>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div>
                        <div className='flex flex-col'>
                            <label htmlFor="email">Email Address*</label>
                            <input className='input-frame' type="email" id="email" {...register("email", {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9.]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/,
                                    message: 'Invalid email pattern'
                                }
                            })} />
                            <p className='error-message'>{errors.email?.message}</p>
                        </div>
                        <div className='flex flex-col mt-4'>
                            <label htmlFor="password">Password*</label>
                            <input className='input-frame' type="password" id="password" {...register("password", {
                                required: 'Email is required'
                            })} required />
                            <p className='error-message'>{errors.password?.message}</p>
                        </div>
                    </div>
                    <div className='flex justify-end pt-2'>
                        <a className='underline text-right' onClick={(event) => { handleForgotPassword(event) }}>Forgot your password?</a>
                    </div>
                    <div className='pt-8'>
                        <PrimaryButton ButtonLabel="Sign In" classProp="lg:w-[45%] w-[100%]" handleButtonClick={(event: MouseEvent) => { handleSubmitButton(event) }} />
                    </div>
                </form>
            </div>
        </div>
        <div>
            <Modal open={open} setOpen={setOpen} />
        </div>
    </>)
}

export default HL_SignIn