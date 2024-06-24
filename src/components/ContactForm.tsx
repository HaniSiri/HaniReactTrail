import React, { useState } from 'react'

import PrimaryButton from "./HL_PrimaryButton.tsx";
import { useForm } from 'react-hook-form';
import { GrLocation } from "react-icons/gr";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";


interface fieldInterface {
    label: string,
    placeholder: string,
    required: boolean,
    class: string,
    options?: {
        country: string,
        code: string
    }[]
}

interface formInterface {
    title: string,
    instruction: string,
    disclaimer: string,
    fields: {
        email: fieldInterface,
        lastName: fieldInterface,
        firstName: fieldInterface,
        phone: fieldInterface,
        message: fieldInterface,
        phoneCode: fieldInterface
    }
}

interface formProps {
    formData: formInterface
}

type FormValues = {
    email: String,
    firstName: String,
    lastName: string,
    phoneCode: string,
    phoneNumber: string,
    message: string
}

const ContactForm = ({ formData }: formProps) => {
    const [currentStateCode, setcurrentStateCode] = useState('+44');
    const [searchCode, setsearchCode] = useState(false);
    const form = useForm<FormValues>({
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
            phoneCode: "",
            phoneNumber: "",
            message: ""
        }
    });
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;
    const onSubmit = (data: FormValues) => {
        console.log('onSubmit data ', data);
    }

    return (
        <div className='mr-6'>
            <div className='fs-1 fw-semibold'>{formData.title}</div>
            <div>{formData.instruction}</div>

            <form className='my-12' onSubmit={handleSubmit(onSubmit)}>
                <div className='d-flex flex-column mt-6'>
                    <label htmlFor={formData.fields.email.label}>{formData.fields.email.label + (formData.fields.email.required ? '*' : '')}</label>
                    <input className='border rounded-1 px-2 border-secondary form-field' type="text" placeholder={formData.fields.email.placeholder}
                        {...register("email", {
                            required: 'Please check your entry and try again.',
                            pattern: {
                                value: /^[a-zA-Z0-9.]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/,
                                message: 'Invalid email pattern'
                            }
                        })} />
                    <p className='error-message'>{errors.email?.message}</p>
                </div>
                <div className='d-flex name row gx-3'>
                    <div className='d-flex flex-column mt-6 col-lg-6 mt-6'>
                        <label htmlFor={formData.fields.firstName.label}>{formData.fields.firstName.label + (formData.fields.firstName.required ? '*' : '')}</label>
                        <input className='border form-field rounded-1 border-secondary px-2' type="text" placeholder={formData.fields.firstName.placeholder}
                            {...register("firstName", {
                                required: 'All required fields (marked with *) must be filled out to continue.',
                            })} />
                        <p className='error-message'>{errors.firstName?.message}</p>
                    </div>
                    <div className='d-flex flex-column col-lg-6 mt-6'>
                        <label htmlFor={formData.fields.lastName.label}>{formData.fields.lastName.label + (formData.fields.lastName.required ? '*' : '')}</label>
                        <input className='border form-field rounded-1 border-secondary px-2' type="text" placeholder={formData.fields.lastName.placeholder}
                            {...register("lastName", {
                                required: 'All required fields (marked with *) must be filled out to continue.',
                            })} />
                        <p className='error-message'>{errors.lastName?.message}</p>
                    </div>
                </div>
                <div className='d-flex flex-column mt-6'>
                    <label htmlFor={formData.fields.phone.label}>{formData.fields.phone.label + (formData.fields.phone.required ? '*' : '')}</label>
                    <div className=' border form-field rounded-1 border-secondary flex position-relative'>
                        <div className='px-2 col-3 d-flex align-items-center'>
                            <button className='col-8 d-flex justify-content-around align-items-center' type='button' onClick={() => { setsearchCode(!searchCode) }}>
                                <GrLocation className='icon-size' />
                                {searchCode ? <FaChevronUp /> : <FaChevronDown />}

                            </button>
                            <div className='col-4 border-end border-dark-subtle text-secondary'>
                                {currentStateCode}
                            </div>
                        </div>
                        <input type="hidden" placeholder={formData.fields.phoneCode.placeholder}
                            {...register("phoneCode")} />
                        <input className='px-2 col-9' type="text" placeholder={formData.fields.phone.placeholder}
                            {...register("phoneNumber", {
                                required: 'All required fields (marked with *) must be filled out to continue.',
                            })} />
                        <div className={(searchCode ? '' : 'd-none ') + ' position-absolute top-100 z-3 bg-white border w-100'}>
                            <div className='w-100 dropdown-options d-flex flex-row align-items-center'>
                                <FiSearch className='icon-size mx-3' />
                                <input type='text' className='w-100 h-100' placeholder='Enter Country Name'></input>
                            </div>
                            <ul>
                                {formData.fields.phoneCode.options?.map((opt) => {
                                    return (
                                        <li className={'d-flex dropdown-options align-items-center ' + (opt.code === currentStateCode ? 'bg-selected' : '')} onClick={() => { setcurrentStateCode(opt.code); setsearchCode(false); }}><GrLocation className='icon-size ml-4 mr-4' /> {opt.country} {opt.code}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                    <p className='error-message'>{errors.phoneNumber?.message}</p>
                </div>
                <div className='d-flex flex-column mt-6'>
                    <label htmlFor={formData.fields.message.label}>{formData.fields.message.label + (formData.fields.message.required ? '*' : '')}</label>
                    <textarea className='border rounded-1 border-secondary p-2 textarea-field' maxLength={500} placeholder={formData.fields.message.placeholder}
                        {...register("message", {
                            required: 'The maximum number of characters allowed for this field is 500.',
                        })}></textarea>
                    <p className='error-message'>{errors.message?.message}</p>
                </div>
                <p className='mt-6'>*Required</p>
                <div className='mt-6 disclaimer'>
                    {formData.disclaimer}
                </div>
                <div className='mt-6 form-buttons'>
                    <div>
                        <PrimaryButton ButtonLabel="Submit" buttonType='submit' classProp="contact-submit" />
                    </div>
                    <button type='reset' className='mt-6 px-2 mt-lg-0'>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm