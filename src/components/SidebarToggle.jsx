import React from 'react';

function SidebarToggle({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="mr-4 text-xl font-bold md:hidden"
            aria-label="Toggle Sidebar"
        >
            &#8250;&#8250;
        </button>
    );
}

export default SidebarToggle;