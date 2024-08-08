import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";
import "../App.css"; // Ensure this path is correct

const SongCard = ({ song }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/songs/${song.id}`, { state: { song } });
  };

  if (!song) {
    return null; // Return null or a placeholder if song is undefined
  }

  return (
    <Card className="song-card" onClick={handleCardClick}>
      <CardContent className="song-card-content">
        <Typography variant="h5">{song.title || "Unknown Song"}</Typography>
        <Typography variant="subtitle1">
          {song.artist || "Unknown Artist"}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Album: {song.album || "Unknown Album"}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Year: {song.year || "Unknown Year"}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Plays: {song.plays || 0}
        </Typography>
      </CardContent>
    </Card>
  );
};

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
