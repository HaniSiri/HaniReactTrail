import React from 'react'
import { TextIndent } from '@phosphor-icons/react'
import CheckBoxFilter from './GenericCheckBox.tsx'


interface filterProps {
    newsFilters: {
        name: string
        values: {
            name: string,
            value: string,
            selected?: boolean
        }[]
    }[]
    className: string
}

const Filters = ({ newsFilters, className }: filterProps) => {
    const handleCheckboxChange = (event) => {
        console.log('event ', event);
        console.log('newsFilters ', newsFilters);
    }
    return (
        <div className={`filters-container border-l ${className}`}>
            <div className='flex py-2 px-2 border-b items-center'>
                <TextIndent size={24} color="#6e6e6e" weight='bold' />
                <div className=' pl-2 text-2xl font-bold'>Filters</div>
            </div>
            <div className='px-2'>
                {newsFilters.map((filter) => {
                    return <CheckBoxFilter filterData={filter} handleChange={event => handleCheckboxChange(event)} />
                })}
            </div>
        </div>
    )
}

export default Filters