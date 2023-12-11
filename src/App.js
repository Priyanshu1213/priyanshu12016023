
import React from 'react';
import YouTubeSearch from './firstpage';

function App() {
  const videoId = "latest technology trends 2023"; 

  return (
    <div className="App">
      <YouTubeSearch videoId={videoId} />
    </div>
  );
}

export default App;

