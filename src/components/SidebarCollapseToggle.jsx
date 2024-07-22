import React from 'react';

function SidebarCollapseToggle({ isCollapsed, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`absolute right-2 text-xl font-bold p-2 rounded-full hover:bg-gray-200 transition-transform duration-300`}
            aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
            {isCollapsed ? '>>' : '<<'}

        </button>
    );
}

export default SidebarCollapseToggle;
