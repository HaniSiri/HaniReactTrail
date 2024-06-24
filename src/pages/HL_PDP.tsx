/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"
import allProductData from '../data/productData.json';
import chevronRight from "../assets/chevron-right.svg";
import ProductImages from '../components/ProductImages.tsx';
import ProductVariations from '../components/ProductVariations.tsx';
import ProductDescription from '../components/ProductDescription.tsx';
import "../styles/ProductPage.css";


const HL_PDP = () => {
    const { pid } = useParams();
    const productData = allProductData[pid];
    return (
        <div className='main-container mx-auto'>
            <div className='lg:px-[6.67%] md:px-[5.38%] px-[4.27%]'>
                <div className='back flex items-center'>
                    <Link className='flex primary-color items-center text-sm' to='/'>
                        <img className='pl-2 transform180' src={chevronRight} />
                        <span className=''> Back </span>
                    </Link>
                    <div className='mx-3 h-2 border-l-2 border-slate-400'></div>
                    <div className='text-sm'>{productData.name}</div>
                </div>
                <div className='heading mb-4'>
                    <h1 className='custom-font-bd text-5xl secondary-text-color my-8 font-semibold'>{productData.name}</h1>
                    <div className='text-base'>{productData.shortDescription}</div>
                </div>
            </div>
            <div className='flex lg:mt-4 flex-wrap lg:p-0 px-[4.27%] md:px-[5.38%]'>
                <div className='w-full lg:w-[60.764%]'>
                    <ProductImages images={productData.images} tags={productData.tags} />
                </div>
                <div className='w-full lg:w-[39.236%] lg:pt-[45px] lg:pr-[6.598%] lg:pl-[4.445%] left-0 lg:relative'>
                    <ProductVariations price={productData.price} variationAttributes={productData.variationAttributes} pid={productData.sku} />
                </div>
            </div>
            <div className='product-description mt-16'>
                <ProductDescription details={productData.details} />
            </div>
        </div>
    )
}

export default HL_PDP