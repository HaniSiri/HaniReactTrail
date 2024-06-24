import React, { useState } from 'react'
import { FaChevronUp } from "react-icons/fa6";
import { BsArrowRightCircle } from "react-icons/bs";


const StickyHeader = ({ price, variationAttributes, name }) => {
    const [qty, setqty] = useState(1);
    function decreaseQty() {
        if (qty > 1) {
            setqty(qty - 1);
        }
    }
    function increaseQty() {
        setqty(qty + 1);
    }
    return (
        <div className='grid grid-cols-12 rounded-full sticky z-10 top-0 shadow-xl fixed'>
            <div className='name-and-price col-span-3 border-r border-gray-light p-3'>
                <div className='custom-font-bd text-lg'>{name}</div>
                <div className='text-xs text-gray-500'>{price.currency}{price.value} Price</div>
            </div>
            <div className='col-span-3 flavor flex justify-between border-r border-gray-light p-3'>
                <div className='flex'>
                    <img className={'rounded-full h-12 w-12 '} src={'/images/swatches/' + variationAttributes.flavour.variations[0].toLowerCase().replaceAll(' and', '').replaceAll(' ', '_') + '.png'} alt='swatch'></img>
                    <div className='pl-3'>
                        {variationAttributes.flavour.variations[0]}
                        <div>
                            See the {variationAttributes.flavour.variations.length} available flavours
                        </div>
                    </div>
                </div>
                <button className='primary-color '>
                    <FaChevronUp className='h-6 w-6' />
                </button>
            </div>
            <div className='col-span-2 size flex justify-between border-r border-gray-light p-3'>
                <div className='flex'>
                    <div className='pl-3'>
                        Size - {variationAttributes.size.variations[0]}
                        <div>
                            See all available sizes
                        </div>
                    </div>
                </div>
                <button className='primary-color '>
                    <FaChevronUp className='h-6 w-6' />
                </button>
            </div>
            <div className='col-span-4 flex'>
                <div className='qty w-[139px] border-r border-gray-light p-3'>
                    <div className='qty-selector font-semibold primary-color rounded-full border border-primay-color w-[92px] flex justify-center items-center'>
                        <button className={'text-2xl ' + (qty <= 1 ? 'text-gray-300' : '')} onClick={decreaseQty}>-</button>
                        <input type='text' value={qty} className='w-10 border-none text-lg text-center p-1'></input>
                        <button className='text-2xl' onClick={increaseQty}>+</button>
                    </div>
                </div>
                <div className='w-full flex items-center m-3'>
                    <button type='button' className='grid w-full rounded-full bg-primary-color py-1 hover:bg-[#224945] items-center'>
                        <BsArrowRightCircle className='inline fill-white h-11 w-11 pl-2' />
                        <span className='absolute text-white font-semibold justify-self-center'> Add to Bag</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StickyHeader