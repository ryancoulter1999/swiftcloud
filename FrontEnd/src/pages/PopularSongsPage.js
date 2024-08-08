import React, { useState, useEffect } from "react";
import {
  fetchPopularSongsLastMonth,
  fetchPopularSongsAllTime,
} from "../services/api";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";
import "../App.css";

const PopularSongsPage = () => {
  // State variables for managing songs and the view type (last month or all time)
  const [songs, setSongs] = useState([]);
  const [view, setView] = useState("allTime"); // Default to all time view

  // Fetch popular songs based on the selected view when the component mounts or the view changes
  useEffect(() => {
    if (view === "lastMonth") {
      fetchPopularSongsLastMonth().then(
        (response) => setSongs(response.data.slice(0, 10)) // Set the top 10 songs of last month
      );
    } else {
      fetchPopularSongsAllTime().then(
        (response) => setSongs(response.data.slice(0, 10)) // Set the top 10 songs of all time
      );
    }
  }, [view]);

  return (
    <Container className="root-container">
      {/* Title */}
      <Typography variant="h4" className="popular-songs-title">
        Top 10 Popular Songs
      </Typography>
      {/* Button group to switch between last month and all time views */}
      <ButtonGroup
        variant="contained"
        aria-label="contained primary button group"
        className="popular-songs-button-group"
      >
        <Button onClick={() => setView("lastMonth")}>Last Month</Button>
        <Button onClick={() => setView("allTime")}>All Time</Button>
      </ButtonGroup>
      {/* List of popular songs */}
      <List>
        {songs.map((song, index) => (
          <ListItem key={index} className="popular-songs-list-item">
            <ListItemText
              primary={`${index + 1}. ${song.title}`}
              secondary={`Plays: ${song.plays}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PopularSongsPage;
