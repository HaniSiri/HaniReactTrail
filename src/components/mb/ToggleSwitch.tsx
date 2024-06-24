import React, { useState } from 'react'
import { GridFour, List } from '@phosphor-icons/react';

interface ToggleProp {
    defaultSwitch: Boolean
    handleToggle: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

const ToggleSwitch = ({ defaultSwitch, handleToggle }: ToggleProp) => {
    const [toggle, setToggle] = useState(defaultSwitch);
    return (<>
        <div className='flex items-center cursor-pointer p-0.5 border-2 rounded w-auto toggle transition-all duration-300 ease-in-out' onClick={(event) => { setToggle(!toggle); handleToggle(event) }}>
            <div className='flex'>
                <div className={`py-1 px-2 ${toggle ? 'text-n-neutral-800' : 'bg-white text-n-neutral-1000 active-view-icon'}`}>
                    <List size={24} weight="bold" />
                </div>
                <div className={`py-1 px-2 ${!toggle ? 'text-n-neutral-800' : 'bg-white text-n-neutral-1000 active-view-icon'}`}>
                    <GridFour size={24} weight="bold" />
                </div>
            </div>
        </div>
    </>)
}

export default ToggleSwitch