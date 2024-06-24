import React, { useState } from 'react'
import NewsTile from '../components/mb/NewsTile.tsx';
import SearchBar from '../components/mb/SearchBar.tsx';
import ToggleSwitch from '../components/mb/ToggleSwitch.tsx';
import "../global.css";
import Filters from '../components/mb/Filters.tsx';

interface filterProps {
    name: string
    values : {
        name: string,
        value: string,
        selected ?: boolean,
        image ?: string
    }[]
}

const filters : filterProps[] = [
    {
        name: 'Category',
        values: [
            {
                name: 'All',
                value: 'true',
                selected: true
            },
            {
                name: 'General',
                value: 'false'
            },
            {
                name: 'Alpine Skiing',
                value: 'alpine-skiing'
            },
            {
                name: 'Bobsleigh',
                value: 'bobsleigh'
            },
            {
                name: 'Alpine Skiing',
                value: 'alpine-skiing'
            },
            {
                name: 'Bobsleigh',
                value: 'bobsleigh'
            },
            {
                name: 'Alpine Skiing',
                value: 'alpine-skiing'
            },
            {
                name: 'Bobsleigh',
                value: 'bobsleigh'
            }
        ]
    },
    {
        name: 'News Type',
        values: [
            {
                name: 'Ceremonies News',
                value: 'ceremonies'
            },
            {
                name: 'Facts',
                value: 'facts'
            },
            {
                name: 'IOC News',
                value: 'iocnews',
                selected: true
            },
            {
                name: 'Media Communications',
                value: 'media',
                selected: true
            },
            {
                name: 'Facts',
                value: 'facts'
            },
            {
                name: 'IOC News',
                value: 'iocnews',
                selected: true
            },
            {
                name: 'Media Communications',
                value: 'media'
            }
        ]
    },
    {
        name: 'NOC',
        values : [
            {
                name: 'India',
                value: 'IN',
                image: '/images/countries/IN.png'
            },
            {
                name: 'United States',
                value: 'US',
                image: '/images/countries/US.png'
            }
        ]
    }
]

const News = () => {
    const [showImgTop, setShowImgTop] = useState(true);
    const showImgLeft = false;
    const defaultSwitch = true;
    const list = [1, 2, 3, 4, 5, 6];
    return (<>
        <div className='flex flex-row'>
            <div className='px-6 basis-10/12'>
                <div className='flex gap-x-6 mb-4'>
                    <SearchBar />
                    <ToggleSwitch handleToggle={() => setShowImgTop(!showImgTop)} defaultSwitch={defaultSwitch} />
                </div>
                <div className={showImgTop ? 'grid grid-cols-3 gap-x-6 gap-y-8' : ''}>
                    {list.map((item) =>
                        <NewsTile showImgTop={showImgTop} showImgLeft={showImgLeft} />
                    )}
                </div>
            </div>
            <Filters className={'px-3 basis-2/12'} newsFilters={filters} />
        </div>
    </>
    )
}

export default News