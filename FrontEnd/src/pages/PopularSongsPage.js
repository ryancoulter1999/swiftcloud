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
  const [songs, setSongs] = useState([]);
  const [view, setView] = useState("allTime"); // Default to all time view

  useEffect(() => {
    if (view === "lastMonth") {
      fetchPopularSongsLastMonth().then((response) =>
        setSongs(response.data.slice(0, 10))
      );
    } else {
      fetchPopularSongsAllTime().then((response) =>
        setSongs(response.data.slice(0, 10))
      );
    }
  }, [view]);

  return (
    <Container className="root-container">
      <Typography variant="h4" className="popular-songs-title">
        Top 10 Popular Songs
      </Typography>
      <ButtonGroup
        variant="contained"
        aria-label="contained primary button group"
        className="popular-songs-button-group"
      >
        <Button onClick={() => setView("lastMonth")}>Last Month</Button>
        <Button onClick={() => setView("allTime")}>All Time</Button>
      </ButtonGroup>
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
