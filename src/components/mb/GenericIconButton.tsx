import React from 'react'
import { TextIndent } from '@phosphor-icons/react'

interface GenericIconButtonProps {
    label: string,
    setshowFilters: React.Dispatch<React.SetStateAction<boolean>>
}
function GenericIconButton({ label, setshowFilters }: GenericIconButtonProps) {
    return (<>
        <button className='flex items-center' onClick={() => setshowFilters(true)}>
            <TextIndent size={24} color="#6e6e6e" weight='bold' />
            <div className='hidden lg:block font-semibold text-lg'>
                {label}
            </div>
        </button>
    </>)
}

export default GenericIconButton