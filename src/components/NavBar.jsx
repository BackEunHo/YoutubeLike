import React from 'react';

function NavBar() {
    const navItems = ['전체', '실시간', '음악', '게임', '뉴스', '스포츠', '학습', '팟캐스트'];
    const scrollbarHideStyle = {
        msOverflowStyle: 'none',  // IE and Edge
        scrollbarWidth: 'none',   // Firefox
        '&::-webkit-scrollbar': {
            display: 'none'       // Chrome, Safari, and Opera
        }
    };

    return (
        <nav className="py-2 px-4 overflow-x-auto" style={scrollbarHideStyle}>
            <ul className="flex justify-center space-x-4 min-w-max w-fit mx-auto overflow-hidden">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <button className="px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 text-sm font-medium">
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;
