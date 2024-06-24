import React from 'react'
import tilePick from "../../assets/Olympics-image-8.png";

interface NewsTileProps {
    showImgTop: Boolean
    showImgLeft: Boolean
}

const NewsTile = ({ showImgTop, showImgLeft }: NewsTileProps) => {
    const pubDateTime = new Date('2024-06-19T16:44:00');
    const today = new Date();
    const minDiff = Math.round((today.getTime() - pubDateTime.getTime()) / (1000 * 60));

    return (<>
        <div className={showImgLeft ? 'flex flex-row' : 'flex flex-col'}>
            <div className={!showImgTop && !showImgLeft ? 'hidden' : (showImgLeft ? '' : 'min-h-48')}><img className={showImgTop ? "img-fill-available rounded" : "rounded"} src={tilePick} alt="" /></div>
            <div className={showImgLeft ? 'overflow-auto p-2' : 'p-2'}>
                <div className='rounded-full size-fit bg-badge-neutral px-2 text-xs mr-2 uppercase font-semibold text-n-neutral-800'>News Articles</div>
                <div className='uppercase font-semibold text-n-neutral-700 text-sm pt-2'>Luge</div>
                <div className="text-n-neutral-900 font-bold text-lg truncate">Italy, France and Türkiye -Winter Youth Olympic Games</div>
                <div className="text-n-neutral-800 text-sm truncate">Final event of bobsleigh competition at 2024 Youth Olympic Games (YOG) sees slider from North African nation pick up silver.</div>
                <div className="text-n-neutral-600 text-xs pt-2">{minDiff < 59 ? minDiff + ' minutes ago' : ((minDiff / 60) < 24 ? Math.round(minDiff / 60) + ' hours ago' : (pubDateTime.getDate() + ' ' + pubDateTime.toLocaleString("default", { month: "long" })) + ' ' + pubDateTime.getFullYear() + ' - ' + pubDateTime.getHours() + ':' + pubDateTime.getMinutes())}</div>
            </div>
        </div>
    </>)
}

export default NewsTile