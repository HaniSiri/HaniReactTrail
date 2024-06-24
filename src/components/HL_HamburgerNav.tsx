import React from 'react';
import { Link } from "react-router-dom";
import herbalLifeIcon from "../assets/hl-header-logo.png";
import close from "../assets/close.svg";
import chevronRight from "../assets/chevron-right.svg";
import { useState } from "react";
interface HamburgerNavProps {
    HamburgerNavItems: [];
    onCloseNav: () => void;
}
const HL_HamburgerNav = ({ HamburgerNavItems, onCloseNav }: HamburgerNavProps) => {

    const [selectedItem, setSelectedItem] = useState({});
    const [selectedSubItem, setSelectedSubItem] = useState({});
    const [hideAll, setHideAll] = useState(false);

    const handleNavItems = (event: MouseEvent) => {
        console.log('event ', event);
        const index = event.target.dataset.index;
        const value = HamburgerNavItems[index];
        value.showChevron && setSelectedItem(value);
        console.log('selectedItem ', selectedItem);
    }

    const handleSubNavItems = (event: MouseEvent) => {
        console.log('event ', event);
        const index = event.target.dataset.index;
        const value = selectedItem.subNavItems[index];
        value.showChevron && setSelectedSubItem(value);
        console.log('selectedItem ', selectedSubItem);
    }

    const handleSelectedItem = () => {
        setSelectedItem({});
        console.log('selectedItem ', selectedItem);
    }

    const handleSelectedSubItem = () => {
        setSelectedSubItem(selectedItem);
        console.log('selectedItem ', selectedItem);
    }

    return <>
        <div className="hamburger-container">
            <div className="nav-header flex justify-between">
                <img className="nav-header-logo" src={herbalLifeIcon} alt="" />
                <a className='no-underline' href="" onClick={() => onCloseNav}><img className="close" src={close} alt="" /></a>
            </div>
            <div className="nav-section pb-4">
                {selectedItem.title ? '' : HamburgerNavItems.map((item, index) =>
                    <div
                        key={item.title}
                        className="">
                        <a className="no-underline nav-items flex justify-between" data-index={index} onClick={(event) => { handleNavItems(event) }}>
                            <span data-index={index}>{item.title}</span>
                            {item.showChevron && <img className="chevron-right" data-index={index} src={chevronRight} alt="" />}
                        </a>
                    </div>
                )}
            </div>
            {(selectedItem.title && !selectedSubItem.label) && <div className="text-align nav-section pb-4">
                <div className="selected-nav-heading" onClick={() => handleSelectedItem()}>
                    <p>{selectedItem.title}</p>
                </div>
                {selectedItem.subNavItems.map((subItem, index) =>
                    <div key={subItem.label} className="">
                        <a className="no-underline nav-items flex justify-between" data-index={index} onClick={(event) => { handleSubNavItems(event) }}>
                            <span data-index={index}>{subItem.label}</span>
                            {subItem.showChevron && <img className="chevron-right" data-index={index} src={chevronRight} alt="" />}
                        </a>
                        {/* <a href={subItem.link} className="no-underline nav-items flex justify-between">
                            {subItem.label}
                        </a> */}
                    </div>
                )}
            </div>}
            {selectedSubItem.label && <div className="text-align nav-section pb-4">
                <div className="selected-nav-heading" onClick={() => handleSelectedSubItem()}>
                    <p>{selectedSubItem.label}</p>
                </div>
                {selectedSubItem.catNavItems.map((subItem, index) =>
                    <div key={subItem.label} className="">
                        {/* <a className="no-underline nav-items flex justify-between" data-index={index} onClick={(event) => { handleSubNavItems(event) }}>
                            <span data-index={index}>{subItem.label}</span>
                            {subItem.showChevron && <img className="chevron-right" data-index={index} src={chevronRight} alt="" />}
                        </a> */}
                        <a href={subItem.pid} className="no-underline nav-items flex justify-between">
                            {subItem.label}
                        </a>
                        {/* <Link className="nav-items flex justify-between no-underline" to={subItem.pid}>{subItem.label}</Link> */}
                    </div>
                )}
            </div>}
        </div>
    </>
}

export default HL_HamburgerNav;