import React, { useState } from 'react'
import chevronRight from "../assets/chevron-right.svg";
import { CiCircleCheck } from "react-icons/ci";
import { BsArrowRightCircle } from "react-icons/bs";

interface PVarProps {
    price: {}
    variationAttributes: {}
    pid: {}
}

const ProductVariations = ({ price, variationAttributes, pid }: PVarProps) => {
    const [maxColorCount, setmaxColorCount] = useState(3);
    const [qty, setqty] = useState(1);
    const flavours = variationAttributes.flavour;
    const sizes = variationAttributes.size;
    function expandFlavours() {
        setmaxColorCount(flavours.variations.length);
    }
    function collapseFlavours() {
        setmaxColorCount(3);
    }

    function decreaseQty() {
        if (qty > 1) {
            setqty(qty - 1);
        }
    }
    function increaseQty() {
        setqty(qty + 1);
    }

    return (
        <div className=''>
            <div className='price flex'>
                <div className='value primary-color font-md text-2xl lg:text-4xl font-bold'>
                    {[price.currency, price.value].join(' ')}
                </div>
                <div className='text-sm self-end pl-2 text-gray-600'>
                    Price
                </div>
            </div>
            <div className='price-per-100 my-3 text-gray-600'>
                <div> {'(' + price.currency + price.lowerunitprice + ' / ' + price.lowerunit + ')  |  SKU ' + pid} </div>
            </div>
            <div className='text-xs'>
                Final price including delivery costs will be displayed on checkout page. Delivery costs will vary depending on delivery address
            </div>
            <div className='variations-container mt-6'>
                <div className='mb-8 flavour'>
                    <div className='variation-title primary-color text-2xl font-medium'>
                        Select {flavours.name.toLowerCase()}
                    </div>
                    <div className={'flex flex-wrap gap-3 my-4'}>
                        {flavours.variations.map((val, index) => {
                            return (
                                <div className={(index > maxColorCount ? 'hidden' : '') + ' flex flex-col items-center w-16'}>
                                    <img className={'rounded-full h-12 w-12 ' + (index === 0 && 'border-2 border-primay-color')} src={'/images/swatches/' + val.toLowerCase().replaceAll(' and', '').replaceAll(' ', '_') + '.png'} alt={val}></img>
                                    <div className='text-xs text-center py-3'>{val}</div>
                                </div>
                            )
                        })}
                        <div className='more-values self-center'>
                            {flavours.variations && flavours.variations.length > 4 && (
                                maxColorCount !== flavours.variations.length
                                    ? (<button className='primary-color underline font-medium' onClick={expandFlavours}>
                                        {'+' + (flavours.variations.length - 4) + ' ' + flavours.name + '(s)'}
                                    </button>)
                                    : (<button className='text-sm font-medium flex' onClick={collapseFlavours}>
                                        <img className='pb-[2px] pl-2 transform180' src={chevronRight} alt="" /> <span className='text-nowrap self-center'> Show less</span>
                                    </button>)

                            )}
                        </div>
                    </div>
                </div>
                <div className='mb-8 size'>
                    <div className='variation-title primary-color text-2xl font-medium'>
                        Select {sizes.name.toLowerCase()}
                    </div>
                    <div className={'flex gap-3 my-4'}>
                        {sizes.variations.map((val, index) => {
                            return (
                                <div className={'primary-color text-lg custom-font-md px-1.5 py-1 rounded-full border text-center flex  border-primay-color ' + (index === 0 ? 'button-background-dark' : '')}>
                                    {index === 0 && (<CiCircleCheck className='self-center h-7 w-7' />)}
                                    <div className='px-1'>{val}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='qty w-[139px]'>
                <div className='primary-color text-2xl font-medium'>
                    Qty*
                </div>
                <div className='qty-selector mt-5 font-semibold primary-color rounded-full border border-primay-color w-[92px] flex justify-center'>
                    <button className={'text-2xl ' + (qty <= 1 ? 'text-gray-300' : '')} onClick={decreaseQty}>-</button>
                    <input type='text' value={qty} className='w-10 border-none text-lg text-center p-1'></input>
                    <button className='text-2xl' onClick={increaseQty}>+</button>
                </div>
            </div>
            <div className='atc mt-8'>
                <button type='button' className='grid w-full rounded-full bg-primary-color py-1 hover:bg-[#224945] items-center'>
                    <BsArrowRightCircle className='inline fill-white h-11 w-11 pl-2' />
                    <span className='absolute text-white font-semibold pl-20 pr-24 justify-self-center'> Add to Bag</span>
                </button>
            </div>
        </div>
    )
}

export default ProductVariations