import React, { useRef, useState } from 'react'
import { FiShare } from "react-icons/fi";

interface ImgProduct {
    images: {},
    tags: []
}

const ProductImages = ({ images, tags }: ImgProduct) => {
    const [currentImage, setcurrentImage] = useState(0);
    const imageRef = useRef([]);
    imageRef.current = [];

    const addRefs = (el: HTMLElement) => {
        if (imageRef.current && el && !imageRef.current.includes(el)) {
            imageRef.current.push(el);
            console.log(imageRef.current)
        }
    }
    const setImageIndex = (index: Number) => {
        console.log(index);
        imageRef.current.forEach(function (ref, i) {
            if (index === i) {
                ref.className = ref.className.replace('border-white', 'border-primary-color');
            } else {
                ref.className = ref.className.replace('border-primay-color', 'border-white');
            }
            setcurrentImage(index);
        })
    }
    return (
        <div>
            <div className='relative images secondary-color-bg lg:h-[783px] rounded'>
                <div className='large-images h-full'>
                    {
                        images.large.map((imgurl, index) => {
                            return (
                                <img className={'object-cover h-full ' + (currentImage === index ? 'show' : 'hidden')} src={imgurl} alt={'image-' + index}></img>
                            )
                        })
                    }
                </div>
                <div className='small-images absolute lg:top-20 lg:w-[15%] left-[10.97%] hidden lg:block'>
                    <div className='flex flex-col space-y-4'>
                        {
                            images.small.map((imgurl, index) => {
                                return (
                                    <div className=''>
                                        <img className={'rounded-xl border-2 ' + (currentImage === index ? ' border-primay-color' : 'border-white')} src={imgurl} alt={'image-' + index} ref={addRefs} onClick={() => setImageIndex(index)} ></img>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='absolute top-5 right-10 flex space-x-2'>
                    {tags.map((item) =>
                        <div className='rounded-full bg-primary-color text-white px-3 ml-2'>
                            {item}
                        </div>
                    )}
                    <div className='rounded-full primary-color bg-light-green px-3 flex items-center space-x-2'>
                        <FiShare className='pr-1 stroke-2 h-4 w-4 stroke-black' />Share
                    </div>
                </div>

            </div>
            <div className='disclaimer text-xs my-2 gray-text lg:ml-[81px] '>
                Food depicted in images and/or video are illustrative and do not represent product content.
            </div>
        </div>
    )
}

export default ProductImages