import React, { useState } from 'react'
import NewsTile from '../components/mb/NewsTile.tsx';
import SearchBar from '../components/mb/SearchBar.tsx';
import ToggleSwitch from '../components/mb/ToggleSwitch.tsx';
import "../global.css";

const News = () => {
    const [showImgTop, setShowImgTop] = useState(true);
    const showImgLeft = false;
    const defaultSwitch = true;
    const list = [1, 2, 3, 4, 5, 6];
    return (<>
        <div>
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
    </>
    )
}

export default News