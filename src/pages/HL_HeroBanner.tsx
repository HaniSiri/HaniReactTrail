import React, { Fragment } from 'react';
import background from "../assets/banner-background.jpg";
import person from "../assets/person-picture.webp";
import location from "../assets/location_icon.png";
import Whatsapp from "../assets/Whatsapp.png";
import facebook from "../assets/FB.png";
import Instagram from "../assets/Instagram.png";
import check from "../assets/check.svg";
import PrimaryButton from "../components/HL_PrimaryButton.tsx";
interface HeroBannerProps {
    HeroBannerDetails: {}
    HideContactInfo: Boolean
}
const HL_HeroBanner = ({ HeroBannerDetails, HideContactInfo }: HeroBannerProps) => {
    { console.log((HeroBannerDetails.intro).substring(4, HeroBannerDetails.intro.indexOf(',') > 0 || 10000)); }

    return <Fragment>
        <div className="background-container">
            <img className="hero-banner-background" src={background} alt="" />
        </div>
        <div className="hero-banner">
            <div className="person-picture-container">
                <img className="person-picture" src={person} alt="" />
            </div>
            <div className="flex-1"></div>
            <div className="person-details">
                <h1 className="person-intro">{(HeroBannerDetails.intro).substring(0, 4)}&nbsp;<span className='font-bold'>{(HeroBannerDetails.intro).substring(4, HeroBannerDetails.intro.indexOf(',') > 0 ? HeroBannerDetails.intro.indexOf(',') : 10000)}</span>{(HeroBannerDetails.intro).substring(HeroBannerDetails.intro.indexOf(',') > 0 ? HeroBannerDetails.intro.indexOf(',') : 10000, 10000)}</h1>
                {!HideContactInfo &&
                    <div className="person-contact-container">
                        <div className="person-contact">
                            <p className="person-profession flex">
                                <img src={check} width="24" height="24" alt="" />
                                <span>{HeroBannerDetails.profession}</span>
                            </p>
                            <p className="person-moto mt-4 mb-8">{HeroBannerDetails.moto}</p>
                            <PrimaryButton ButtonLabel="Get In Touch" handleButtonClick={() => { window.location.href = '/contact-distributor'; }} />
                        </div>
                        <div className="person-location">
                            <p className="city flex">
                                <img className='pr-3' src={location} alt="" />
                                <p>{HeroBannerDetails.location}</p>
                            </p>
                            <div className="media pt-8">
                                <div>
                                    <img src={facebook} width="24" height="24" alt="" />
                                </div>
                                <div>
                                    <img src={Instagram} width="24" height="24" alt="" />
                                </div>
                                <div>
                                    <img src={Whatsapp} width="24" height="24" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    </Fragment>
}

export default HL_HeroBanner;