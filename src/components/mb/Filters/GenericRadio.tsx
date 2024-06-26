import { CaretDown, CaretUp } from '@phosphor-icons/react'
import { useState } from 'react'
import { filterInputData } from '../../../__types__/Filter';

const GenericRadio = ({ filter, handleChange }: filterInputData) => {
    const [showAll, setshowAll] = useState(false);
    return (
        <div className='pt-2'>
            <div className='text-lg font-bold min-h-12 content-center'>{filter.name}</div>
            <div className=''>
                {filter.values.map((val, index) => {
                    return (
                        <div className={`min-h-12 flex items-center ${!showAll && index > 4 ? 'hidden' : ''}`}>
                            <input type="radio"
                                checked={val.selected}
                                className='custom-radio'
                                id={filterData.name}
                                data-id={val.name}
                                name={filterData.name}
                                value={val.value}
                                onChange={event => handleChange(event)} />
                            {val.image && (<img className='h-4 pl-2' src={val.image} alt={val.name} />)}
                            <label className='ml-2 text-sm'>{val.name}</label>
                        </div>
                    )
                })}
            </div>
            {filter.values.length > 5 && (
                <div className={`flex justify-center items-center min-h-12 font-bold text-sm text-pisa-blue-500`}>
                    <button className='flex items-center ml-2' onClick={() => setshowAll(!showAll)}>
                        {!showAll
                            ? <p className='flex items-center'>{`Show all (${filterData.values.length - 5} more)`} <CaretDown className='mx-2' size={16} weight='bold'></CaretDown></p>
                            : <p className='flex items-center'>{`Show less`} <CaretUp className='mx-2' size={16} weight='bold'></CaretUp></p>}
                    </button>
                </div>
            )}
        </div>
    )
}

export default GenericRadio