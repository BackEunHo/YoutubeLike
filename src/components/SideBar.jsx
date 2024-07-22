import React, { useState, useCallback } from 'react';
import SidebarCollapseToggle from './SidebarCollapseToggle';

function Sidebar({ isOpen }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = useCallback(() => {
        setIsCollapsed(prevState => !prevState);
    }, []);

    return (
        <div className={`fixed top-0 left-0 h-[calc(100vh-3.5rem)] bg-gray-100 shadow-lg transform transition-all duration-300 ease-in-out z-50 
            ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
            ${isCollapsed ? 'w-12' : 'w-min'}
            md:relative md:translate-x-0`}>
            <SidebarCollapseToggle isCollapsed={isCollapsed} onClick={toggleCollapse} />
            <ul className={`list-none p-0 whitespace-nowrap overflow-hidden ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-full'} transition-all duration-300`}>
                <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded">Account</li>
                <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded">Home</li>
                <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded">Shorts</li>
                <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded">Subscriptions</li>
                <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded">YouTube Music</li>
                <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded">Library</li>
            </ul>
        </div>
    );
}

export default Sidebar;