import React from 'react'
import HeroBanner from "./HL_HeroBanner.tsx";
import ContactForm from '../components/ContactForm.tsx';
import ContactInfo from '../components/ContactInfo.tsx';
import ContactPageData from '../data/contactPageData.json'
import "../styles/ContactPage.css";


const ContactDistributor = () => {
    return (<>
        <div className='main-container'>
            <HeroBanner HeroBannerDetails={ContactPageData.contactPersonBannerDetails} HideContactInfo={true} />
            <div className='d-flex flex-column-reverse flex-lg-row contact-info-form-container'>
                <div className='col-lg-4'>
                    <ContactInfo info={ContactPageData.contactInfo} />
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-7 lg:mt-[-125px]'>
                    <ContactForm formData={ContactPageData.contactDistributorForm} />
                </div>
            </div>
        </div>
    </>)
}

export default ContactDistributor