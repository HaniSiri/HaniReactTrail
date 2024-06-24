import { CaretDown, CaretUp } from '@phosphor-icons/react'
import React, { useState } from 'react'
import styles from '../../styles/NewsPage.module.css';


interface CheckBoxProps {
    filterData: {
        name: string
        values: {
            name: string,
            value: string,
            selected ?: boolean,
            image ?: string
        }[]
    }
}
const CheckBoxFilter = ({ filterData }: CheckBoxProps) => {
    const [showAll, setshowAll] = useState(false)
    return (
        <div className='pt-2'>
            <div className='text-lg font-bold min-h-12 content-center'>{filterData.name}</div>
            <div className=''>
                {filterData.values.map((val, index) => {
                    return (
                        <div className={`min-h-12 flex items-center ${!showAll && index > 4 ? 'hidden' : ''}`}>
                            <input type="checkbox" checked={val.selected} className='custom-checkbox mr-2' id={filterData.name} name={filterData.name} value={val.value}></input>
                            {val.image && (<img className='h-4 pr-2' src={val.image} alt={val.name}></img>)}
                            <label className='text-sm'>{val.name}</label>
                        </div>
                    )
                })}
            </div>
            {filterData.values.length > 5 && (
                <div className={`flex justify-end items-center min-h-12 font-bold text-sm ${styles['text-color-pisa-blue']}`}>
                    {!showAll
                        ? (<div className=' flex items-center' onClick={() => setshowAll(true)}>
                            {`Show all (${filterData.values.length - 5} more)`} <CaretDown className='mx-2' size={16} weight='bold'></CaretDown>
                        </div>)
                        : (<div  className=' flex items-center' onClick={() => setshowAll(false)}>
                            {`Show less`} <CaretUp className='mx-2' size={16} weight='bold'></CaretUp>
                        </div>)
                    }
                </div>
            )}

        </div>
    )
}

export default CheckBoxFilter