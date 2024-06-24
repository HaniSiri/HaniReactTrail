import React from 'react'

interface contactInfo {
    name: string,
    title: string,
    phone: string,
    email: string,
    address: {
        name: string,
        line1: string,
        city: string,
        zip: string,
        country: string
    }
}

interface contactInfoProps {
    info: contactInfo
}

const ContactInfo = ({ info }: contactInfoProps) => {
    return (
        <div className='py-6 border-top contact-info-container ' >
            <div className='fs-2 fw-semibold'>
                Contact Info
            </div>
            <div className='mt-6'>
                <div className='text-uppercase fw-semibold'>
                    {info.name}
                </div>
                <div className='fw-light'>
                    {info.title}
                </div>
                <div className='fw-semibold'>
                    {info.phone}
                </div>
                <div className='fw-light'>
                    {info.email}
                </div>
            </div>
            <div className='mt-6'>
                <div className='mt-2 fw-semibold'>
                    {info.address.name}
                </div>
                <div className='fw-light'>
                    {info.address.line1}
                </div>
                <div className='fw-light'>
                    {info.address.city}
                </div>
                <div className='fw-light'>
                    {info.address.zip}
                </div>
                <div className='fw-light'>
                    {info.address.country}
                </div>
            </div>
        </div>
    )
}

export default ContactInfo