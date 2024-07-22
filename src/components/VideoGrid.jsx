import React from 'react';
import VideoCard from './VideoCard';

function VideoGrid() {
    return (
        <div className="min-w-min grid gap-4 p-4 pt-0 overflow-y-auto flex-1 h-[calc(100vh-100px)] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 20 }).map((_, index) => (
                <VideoCard key={index} title={`Video ${index + 1}`} />
            ))}
        </div>
    );
}

export default VideoGrid;
