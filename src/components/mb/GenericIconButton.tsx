import React from 'react'
import { TextOutdent } from '@phosphor-icons/react'

interface GenericIconButtonProps {
    label: string,
    setshowFilters: React.Dispatch<React.SetStateAction<boolean>>
}
function GenericIconButton({ label, setshowFilters }: GenericIconButtonProps) {
    return (<>
        <button className='flex items-center gap-2 hidden lg:flex' onClick={() => setshowFilters(true)}>
            <TextOutdent size={24} color="#6e6e6e" weight='bold' />
            <div className='hidden lg:block font-semibold text-lg'>
                {label}
            </div>
        </button>
    </>)
}

export default GenericIconButton