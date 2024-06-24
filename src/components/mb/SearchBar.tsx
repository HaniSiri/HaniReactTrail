import React, { useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';

const SearchBar = () => {

    const [query, setQuery] = useState("")

    function search(e) {
        e.preventDefault()
        setQuery(e.target.value)
    }

    return (
        <div className="w-full flex text-n-neutral-500 items-center border-2 border-n-neutral-200 rounded px-3">
            <MagnifyingGlass size={24} />
            <input
                type="text"
                className="w-full placeholder-gray-400 text-gray-900 pl-2"
                placeholder="Search..."
                onChange={search}
                value={query} />
        </div>
    );
};

export default SearchBar;