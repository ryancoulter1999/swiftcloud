import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";
import "../App.css";

const SongCard = ({ song }) => {
  const navigate = useNavigate();

  // Handle click event on the card
  const handleCardClick = () => {
    // Navigate to the song detail page with the song data in the state
    navigate(`/songs/${song.id}`, { state: { song } });
  };

  // Return null or a placeholder if song is undefined
  if (!song) {
    return null;
  }

  return (
    <Card className="song-card" onClick={handleCardClick}>
      <CardContent className="song-card-content">
        {/* Display song title */}
        <Typography variant="h5">{song.title || "Unknown Song"}</Typography>
        {/* Display artist name */}
        <Typography variant="subtitle1">
          {song.artist || "Unknown Artist"}
        </Typography>
        {/* Display album name */}
        <Typography variant="body2" color="textSecondary">
          Album: {song.album || "Unknown Album"}
        </Typography>
        {/* Display release year */}
        <Typography variant="body2" color="textSecondary">
          Year: {song.year || "Unknown Year"}
        </Typography>
        {/* Display number of plays */}
        <Typography variant="body2" color="textSecondary">
          Plays: {song.plays || 0}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Define prop types for the SongCard component
SongCard.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    plays: PropTypes.number.isRequired,
  }).isRequired,
};

export default SongCard;
