import React from 'react';

function VideoCard({ title }) {
    return (
        <div className="h-64 bg-gray-200 rounded-lg shadow-md overflow-visible cursor-pointer transition-transform duration-200 flex flex-col justify-between hover:scale-105">
            <div className="w-full h-0 pb-9/16 bg-gray-300"> {/* 16:9 aspect ratio */}
            </div>
            <div className="h-1/5 p-1 text-base rounded-b-lg bg-gray-700 text-white">
                {title}
            </div>
        </div>
    );
}

export default VideoCard;
