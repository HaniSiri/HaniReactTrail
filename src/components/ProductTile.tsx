import React, { useEffect, useState } from 'react'
import allProductData from '../data/productData.json';
import { Link } from "react-router-dom";


interface tileProps {
    pid: string
}

const ProductTile = ({ pid }: tileProps) => {
    let productDetails = allProductData[pid as keyof typeof allProductData];
    const [imagesrc, setimagesrc] = useState(productDetails.images.tileLarge[0]);
    useEffect(() => { setimagesrc(productDetails.images.tileLarge[0]) }, [productDetails])
    const [showDetails, setshowDetails] = useState(false);

    return (
        <div className='tile-container rounded hover-border' onMouseOver={() => { setimagesrc(productDetails.images.tileLarge[1]); setshowDetails(true); }} onMouseLeave={() => { setimagesrc(productDetails.images.tileLarge[0]); setshowDetails(false) }}>
            <div className='bg-body-tertiary rounded-top position-relative'>
                <Link to={'/product/' + productDetails.sku}>
                    <img src={imagesrc} className={showDetails ? 'product-image object-fit-cover rounded-top mouseIn' : 'product-image object-fit-cover rounded-top mouseOut'} alt={productDetails.name} />
                </Link>
                <div className='position-absolute bottom-3 px-2 py-1 start-5 rounded-pill bg-white d-flex align-items-center '>
                    <img className={'rounded-full h-3 w-3'} src={'/images/swatches/' + productDetails.variationAttributes.flavour.variations[0].toLowerCase().replaceAll(' and', '').replaceAll(' ', '_') + '.png'} alt={productDetails.variationAttributes.flavour.variations[0]}></img>
                    <div className='pl-2 flavor-badge text-black'>
                        {productDetails.variationAttributes.flavour.variations[0]}
                    </div>
                </div>
                <div className='position-absolute top-3 start-3'>
                    <div className='d-flex'>
                        {productDetails.tags.map((tag) => {
                            return (
                                <div className='rounded-pill tags background-primary-color px-2 text-white mr-2'>
                                    {tag}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='details p-4 text-black'>
                {showDetails && (
                    <div className={'d-flex align-items-center mb-4'}>
                        {productDetails.variationAttributes.flavour.variations.map((val: string, index: number) => {
                            if (index < 5) {
                                return (
                                    <div className='pr-2'>
                                        <img className={'rounded-full plp-swatches '} src={'/images/swatches/' + val.toLowerCase().replaceAll(' and', '').replaceAll(' ', '_') + '.png'} alt={val}></img>
                                    </div>
                                )
                            } else {
                                return (<></>)
                            }
                        })}
                        {productDetails.variationAttributes.flavour.variations.length > 5 && (
                            <div className=''>
                                + {productDetails.variationAttributes.flavour.variations.length - 5} Flavour(s)
                            </div>
                        )}

                    </div>
                )}
                <div className='product-name fw-bold mb-2 fs-1-1'>
                    {productDetails.name}
                </div>
                <div className='variations fs-1-1 text-secondary'>
                    {productDetails.variationAttributes.size.variations[0]} {productDetails.variationAttributes.size.variations.length - 1 ? ' | + ' + (productDetails.variationAttributes.size.variations.length - 1) + ' Sizes' : ''} | {productDetails.variationAttributes.flavour.variations.length} Flavour(s)
                </div>
                <div className='price mt-4 d-flex align-items-center position-relative'>
                    <div className='fw-bold fs-1-1'>
                        {productDetails.price.currency + ' ' + productDetails.price.value}
                    </div>
                    <div className='pl-2 price-label fw-light'>
                        Price
                    </div>
                    {showDetails && (
                        <div className='position-absolute end-0'>
                            <button className='rounded-pill border-1 border-primary-color px-3 py-1 text-primary-color'>+ Add</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductTile