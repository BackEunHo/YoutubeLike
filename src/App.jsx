import React, { Suspense } from 'react';
import Header from './components/Header';

const Sidebar = React.lazy(() => import('./components/SideBar'));
const VideoGrid = React.lazy(() => import('./components/VideoGrid'));

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <Sidebar />
          <div className="flex-1 overflow-hidden">
            <VideoGrid />
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default App;