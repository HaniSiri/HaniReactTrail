import React, { useState } from 'react'
import { MdOutlineFileDownload } from "react-icons/md";

interface PDes {
    details: {}
}

const ProductDescription = ({ details }: PDes) => {
    const [selectedSection, setselectedSection] = useState(0);
    const sectionDetails = details[selectedSection];

    return (
        <div className='main-container mb-12'>
            <div className='nav-bar grid gap-4 grid-cols-4 lg:px-[6.67%] md:px-[5.38%] px-[4.27%]'>
                {details.map((sec, i) => {
                    return (<button className={'w-full text-left lg:pl-2 lg:pb-5 border-primay-color ' + (i === selectedSection ? 'border-b-4' : 'border-b')}
                        onClick={() => setselectedSection(i)}>
                        {sec.section}
                    </button>)
                })}
            </div>
            <div className={sectionDetails.animationclass}>
                <div className='details pt-16 grid grid-cols-12 lg:px-[6.67%] md:px-[5.38%] px-[4.27%]'>
                    <div className={(sectionDetails.image ? 'col-span-4' : 'col-span-12') + ' text-gray-600 text-lg'}>
                        {sectionDetails.content && (<div className='content'>
                            {sectionDetails.content.map((con) => {
                                return (<div className='mb-4'>{con}</div>)
                            })}
                        </div>)}
                        {sectionDetails.terms && (<div className='terms'>
                            {sectionDetails.terms.map((con) => {
                                return (<div className='italic'>{con}</div>)
                            })}
                        </div>)}
                        {sectionDetails.ingredients && (<div className='ingredients'>
                            <div className='custom-font-bd mb-4'>Ingredients</div>
                            <div className='text-base mb-12'> {sectionDetails.ingredients}</div>
                        </div>)}
                        {sectionDetails.allergyinfo && (<div className='allergyinfo lg:mb-16'>
                            <div className='custom-font-bd mb-4'>Allergen info</div>
                            <div className='text-base'>{sectionDetails.allergyinfo}</div>
                        </div>)}
                        {sectionDetails.downloadlink && (<div className='downloadlink primary-color'>
                            <a className='flex' href={sectionDetails.downloadlink}><MdOutlineFileDownload className='h-7 w-7' />
                                <span className='text-base custom-font-md font-medium pl-4'>Download Nutritional Info</span>
                            </a>
                        </div>)}
                    </div>
                    {sectionDetails.image && (
                        <div className='col-span-12 lg:col-start-6 lg:col-span-7'>
                            <img className='rounded-lg' src={sectionDetails.image} alt={sectionDetails.section}></img>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductDescription