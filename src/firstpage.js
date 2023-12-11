
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './firstpage.css'

const YouTubeSearch = ({ searchQuery }) => {
  const [videoDetailsList, setVideoDetailsList] = useState([]);
  

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCgYQlS0kErsiD1Yv7ZpqD6EvMX48HlJP8&part=snippet&q=${searchQuery}&type=video&maxResults=5`
        );

        const videoIds = response.data.items.map((item) => item.id.videoId);

        const videoDetailsResponses = await Promise.all(
          videoIds.map((videoId) =>
            axios.get(
              `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyCgYQlS0kErsiD1Yv7ZpqD6EvMX48HlJP8`
            )
          )
        );

        const videosDetails = videoDetailsResponses.map(
          (response) => response.data.items[0].snippet
        );

        setVideoDetailsList(videosDetails);
        
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    fetchVideoDetails();
  }, [searchQuery]);

  return (
    <div className="video-container">
      {videoDetailsList.map((videoDetails, index) => (
        <div className="video-card" key={index}>
          <img
            className="video-thumbnail"
            src={videoDetails.thumbnails.default.url}
            alt={videoDetails.title}
          />
          <div className="video-content">
            <h1 className="video-title">{videoDetails.title}</h1>
            <p className="video-description">
              <summary>{videoDetails.description}</summary>
            </p>
          </div>
        </div>
      ))}


    </div>
  );
};

export default YouTubeSearch;








