import React, { Fragment } from 'react';
import herbalLifeIcon from "../assets/hl-footer-logo.webp";
import { useState } from "react";
interface footerItemProp {
    footerNavItems: [{
        title: String,
        cat: [
            { label: String, link: String }
        ]
    }]
}

const HL_Footer = ({ footerNavItems }: footerItemProp) => {
    const [selected, setSelected] = useState(-1);
    const toggle = (index: number) => {
        if (selected == index) {
            return setSelected(-1);
        }
        setSelected(index);
    }

    return <Fragment>
        <div className="flex flex-col xl:flex-row footer-container justify-center py-12">
            <div className="mr-14 pb-9">
                <img src={herbalLifeIcon} alt="" />
            </div>
            <div className="hidden xl:block">
                <div className="flex directory-container ">
                    {footerNavItems.map((item) =>
                        <div
                            key={item.title}
                            className="flex flex-col flex-1">
                            <div className="footer-title">{item.title}</div>
                            <div className="flex flex-col footer-directory-items">
                                {item.cat.map((catItem) =>
                                    <div key={catItem.label} className="footer-directory-link">
                                        <a className='no-underline' href={catItem.link}>{catItem.label}</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="block xl:hidden w-100 accordion">
                <div className="flex directory-container flex-col">
                    {footerNavItems.map((item, index) =>
                        <div key={item.title} className="flex flex-col flex-1 accordion-section">
                            <div className="footer-title flex justify-between" onClick={() => toggle(index)}>
                                <div>{item.title}</div>
                                <div>{selected == index ? '-' : '+'}</div>
                            </div>
                            <div className={selected == index ? 'show' : 'hide'}>
                                <div className="flex flex-col footer-directory-items">
                                    {item.cat.map((catItem) =>
                                        <div key={catItem.label} className="footer-directory-link">
                                            <a className='no-underline' href={catItem.link}>{catItem.label}</a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div >
            </div >
        </div >
    </Fragment >
}

export default HL_Footer;