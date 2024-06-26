import { CaretDown, CaretUp } from '@phosphor-icons/react'
import React, { useState } from 'react'
import SearchBar from './SearchBar.tsx';

interface CheckBoxProps {
    checkboxData: {
        name: string
        eanbleSearch?: boolean,
        values: {
            name: string,
            value: string,
            selected?: boolean,
            image?: string
        }[]
    },
    handleChange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const GenericCheckBox = ({ checkboxData, handleChange }: CheckBoxProps) => {
    const [showAll, setshowAll] = useState(false)
    return (
        <div className='pt-2'>
            <div className='text-lg font-bold min-h-12 content-center'>{checkboxData.name}</div>
            {checkboxData.eanbleSearch && <SearchBar />}
            <div className=''>
                {checkboxData.values.map((val, index) => {
                    return (
                        <div className={`min-h-12 flex items-center ${!showAll && index > 4 ? 'hidden' : ''}`}>
                            <input type="checkbox"
                                checked={val.selected}
                                className='custom-checkbox mr-2'
                                id={checkboxData.name}
                                name={checkboxData.name}
                                value={val.value}
                                data-id={val.name}
                                onChange={event => handleChange(event)} />
                            {val.image && (<img className='h-4 pr-2' src={val.image} alt={val.name} />)}
                            <label className='text-sm'>{val.name}</label>
                        </div>
                    )
                })}
            </div>
            {checkboxData.values.length > 5 && (
                <div className={`flex justify-center items-center min-h-12 font-bold text-sm text-pisa-blue-500`}>
                    <button className='flex items-center ml-2' onClick={() => setshowAll(!showAll)}>
                        {!showAll
                            ? <p className='flex items-center'>{`Show all (${checkboxData.values.length - 5} more)`}
                                <CaretDown className='mx-2' size={16} weight='bold'></CaretDown>
                            </p>
                            : <p className='flex items-center'>{`Show less`}
                                <CaretUp className='mx-2' size={16} weight='bold'></CaretUp>
                            </p>}
                    </button>
                </div>
            )}
        </div>
    )
}

export default GenericCheckBox