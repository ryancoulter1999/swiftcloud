import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

const SongDetailPage = () => {
  // Use useLocation hook to access the state passed via the Link component
  const location = useLocation();
  const { song } = location.state || {};

  // If no song data is available, display a message
  if (!song) {
    return <div>No song data available</div>;
  }

  return (
    <div className="song-detail-container">
      {/* Display song details */}
      <h1>{song.title}</h1>
      <p>
        <strong>Artist:</strong> {song.artist}
      </p>
      <p>
        <strong>Album:</strong> {song.album}
      </p>
      <p>
        <strong>Year:</strong> {song.year}
      </p>
      <p>
        <strong>Plays - June:</strong> {song.plays_june}
      </p>
      <p>
        <strong>Plays - July:</strong> {song.plays_july}
      </p>
      <p>
        <strong>Plays - August:</strong> {song.plays_august}
      </p>
    </div>
  );
};

export default SongDetailPage;
