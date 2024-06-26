import React, { useState } from 'react'
import NewsTile from '../components/mb/NewsTile.tsx';
import SearchBar from '../components/mb/SearchBar.tsx';
import ToggleSwitch from '../components/mb/ToggleSwitch.tsx';
import GenericIconButton from '../components/mb/GenericIconButton.tsx'
import "../global.css";
import Filters from '../components/mb/Filters.tsx';

interface filterProps {
    name: string
    eanbleSearch?: boolean,
    values: {
        name: string,
        value: string,
        selected?: boolean,
        image?: string
    }[]
}

const filters: filterProps[] = [
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
                name: 'Alpine Skiing1',
                value: 'alpine-skiing1'
            },
            {
                name: 'Bobsleigh1',
                value: 'bobsleigh1'
            },
            {
                name: 'Alpine Skiing2',
                value: 'alpine-skiing2'
            },
            {
                name: 'Bobsleigh2',
                value: 'bobsleigh2'
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
        eanbleSearch: true,
        values: [
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
    const [showFilters, setshowFilters] = useState(false);
    const showImgLeft = false;
    const defaultSwitch = true;
    const list = [1, 2, 3, 4, 5, 6];
    return (<>
        <div className='flex flex-row'>
            <div className={`px-6 ${showFilters ? 'basis-10/12' : ''}`}>
                <div className='flex gap-x-6 mb-4 min-h-12'>
                    <SearchBar />
                    <ToggleSwitch classes={'hidden md:block'} handleToggle={() => setShowImgTop(!showImgTop)} defaultSwitch={defaultSwitch} />
                    {!showFilters && <GenericIconButton label='Filters' setshowFilters={setshowFilters} />}
                </div>
                <div className={`${showImgTop ? 'grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8' : ''} ${showFilters ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
                    {list.map((item) =>
                        <NewsTile showImgTop={showImgTop} showImgLeft={showImgLeft} />
                    )}
                </div>
            </div>
            {showFilters && <Filters className={'px-3 basis-2/12'} newsFilters={filters} setshowFilters={setshowFilters} />}
        </div>
    </>
    )
}

export default News