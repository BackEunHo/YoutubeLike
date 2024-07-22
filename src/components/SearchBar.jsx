import React from 'react';

function SearchBar() {
    return (
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow w-full max-w-xl mx-auto my-5">
            <input
                type="text"
                placeholder="검색"
                className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 border-none px-4 py-2 flex-1 text-base outline-none"
            />
        </div>
    );
}

export default SearchBar;
