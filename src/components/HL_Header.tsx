/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Link } from "react-router-dom";
import herbalLifeIcon from "../assets/hl-header-logo.png";
import search from "../assets/search.svg";
import bag from "../assets/bag.svg";
import user from "../assets/user.svg";
import chevronRight from "../assets/chevron-right.svg";
import hamburger from "../assets/hamburger.svg";
import { useState } from "react";
import HL_HamburgerNav from "./HL_HamburgerNav.tsx";


interface subNavItem {
    label: string,
    link: string,
    showChevron?: boolean
    pid?: string
}
interface navItem {
    title: string,
    showChevron: Boolean,
    subNavItems: subNavItem[]
}
interface HeaderProps {
    HamburgerNavItems: navItem[]
}

const HL_Header = ({ HamburgerNavItems }: HeaderProps) => {
    const [selectedItem, setSelectedItem] = useState<navItem>();
    const [selectedSubNavItem, setSelectedSubNavItem] = useState<navItem>();
    const [hamburgerNav, setHamburgerNav] = useState(false);

    const handleNavItemsMouseOver = (index: number) => {
        const value = HamburgerNavItems[index];
        value.showChevron && setSelectedItem(value);
        if (!value.showChevron) {
            return setSelectedItem(undefined);
        }
        setSelectedItem(value);
    }

    const handleSubNavItemsMouseOver = (index: number) => {
        const value = selectedItem.subNavItems[index];
        value.showChevron && setSelectedSubNavItem(value);
        if (!value.showChevron) {
            return setSelectedSubNavItem(undefined);
        }
        setSelectedSubNavItem(value);
    }

    return <>
        {hamburgerNav || <div className="flex header-container">
            <div className="mr-0 xl:mr-14 pt-6 pb-9 flex-none">
                <img className="header-logo flex-none" src={herbalLifeIcon} alt="" />
            </div>
            <div className="hidden xl:flex navitems-container">
                {HamburgerNavItems.map((item, index) =>
                    <div
                        key={item.title}
                        className={selectedItem && selectedItem.title === item.title ? "header-nav-item items-center flex flex-1 header-nav-item_active" : "header-nav-item items-center flex flex-1"}
                        onMouseOver={() => handleNavItemsMouseOver(index)}>
                        <a className="no-underline header-nav-link" href='/'>{item.title}</a>
                    </div>
                )}
            </div>
            <div className='flex-1'></div>
            <div className="flex flex-none items-center ms-5 icons-container">
                <div><img src={search} className="header-icons" alt="" /></div>
                <div><img src={bag} className="header-icons" alt="" /></div>
                <Link className="hidden xl:block" to="/sign-in">
                    <img src={user} className="header-icons" alt="" />
                </Link>
                <div className="block xl:hidden"><img src={hamburger} onClick={() => { setHamburgerNav(true) }} className="header-icons" alt="" /></div>
            </div>
        </div>}
        {hamburgerNav && <HL_HamburgerNav HamburgerNavItems={HamburgerNavItems} onCloseNav={() => setHamburgerNav(false)} />}
        {selectedItem && selectedItem.title && <div className={selectedSubNavItem ? 'sub-nav-container absolute w-100 flex' : "sub-nav-container absolute w-full"} onMouseLeave={() => { setSelectedItem(undefined); setSelectedSubNavItem(undefined) }}>
            <div className='w-50'>{selectedItem.subNavItems.map((item, index) =>
                <div
                    key={item.label}
                    className="sub-nav-item">
                    <a onMouseOver={() => handleSubNavItemsMouseOver(index)} className="sub-nav-link no-underline flex" href='/'>
                        {item.label}
                        {item.showChevron && <img className="chevron-right pl-4" data-index={index} src={chevronRight} alt="" />}
                    </a>
                </div>
            )}</div>
            <div className='w-50'>{selectedSubNavItem && selectedSubNavItem.catNavItems.map((item) =>
                <div
                    key={item.label}
                    className="sub-nav-item">
                    {item.pid ? <Link className="sub-nav-link no-underline" to={item.pid}>{item.label}</Link> : <a className="sub-nav-link no-underline" href='/'>{item.label}</a>}
                </div>
            )}</div>
        </div>}
    </>
}
export default HL_Header;