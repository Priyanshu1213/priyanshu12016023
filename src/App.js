
import React from 'react';
import YouTubeSearch from './firstpage';

function App() {
  const videoId = "latest technology trends 2023"; // Replace with your actual video ID

  return (
    <div className="App">
      <YouTubeSearch videoId={videoId} />
    </div>
  );
}

export default App;

