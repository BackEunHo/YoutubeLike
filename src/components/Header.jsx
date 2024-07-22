import React from 'react';
import SearchBar from './SearchBar';
import NavBar from './NavBar';

function Header() {
    return (
        // <div className="w-full h-14 py-2 px-4 bg-white flex items-center">
        //     <SearchBar />
        // </div>
        <header className="w-full bg-white">
            <div className="h-14 py-2 px-4 flex items-center">
                <SearchBar />
            </div>
            <NavBar />
        </header>
    );
}

export default Header;