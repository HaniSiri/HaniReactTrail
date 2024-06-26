import React, { useState } from 'react'
import { GridFour, List } from '@phosphor-icons/react';
import styles from '../../styles/NewsPage.module.css';

interface ToggleProp {
    defaultSwitch: Boolean
    handleToggle: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    classes: string
}

const ToggleSwitch = ({ defaultSwitch, handleToggle, classes }: ToggleProp) => {
    const [toggle, setToggle] = useState(defaultSwitch);
    return (<>
        <div className={`flex items-center cursor-pointer p-0.5 border-2 rounded w-auto transition-all duration-300 ease-in-out ${styles['toggle']} ${classes}`} onClick={(event) => { setToggle(!toggle); handleToggle(event) }}>
            <div className='flex items-center'>
                <div className={`py-1 px-2 ${toggle ? 'text-n-neutral-800' : `bg-white text-n-neutral-1000 ${styles['active-view-icon']}`}`}>
                    <List size={24} weight="bold" />
                </div>
                <div className={`py-1 px-2 ${!toggle ? 'text-n-neutral-800' : `bg-white text-n-neutral-1000 ${styles['active-view-icon']}`}`}>
                    <GridFour size={24} weight="bold" />
                </div>
            </div>
        </div>
    </>)
}

export default ToggleSwitch