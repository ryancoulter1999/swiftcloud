import React, { useState, useEffect } from "react";
import {
  fetchSongsWithTotalPlays,
  searchSongs,
  fetchSongsByYear,
  fetchPopularSongsLastMonth,
  fetchPopularSongsAllTime,
} from "../services/api";
import SongCard from "../components/SongCard";
import {
  Container,
  Grid,
  TextField,
  Button,
  MenuItem,
  Pagination,
  IconButton,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import "../App.css";

const SongsPage = () => {
  // State variables for managing songs, search query, filters, and pagination
  const [songs, setSongs] = useState([]);
  const [allSongs, setAllSongs] = useState([]); // To keep the original list of songs
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const [album, setAlbum] = useState("");
  const [allAlbums, setAllAlbums] = useState([]);
  const [page, setPage] = useState(1);
  const songsPerPage = 20;

  // Fetch songs with total plays when component mounts
  useEffect(() => {
    fetchSongsWithTotalPlays()
      .then((response) => {
        const dataWithIds = response.data.map((song, index) => ({
          ...song,
          id: index, // Assign a unique id to each song
        }));
        console.log("Fetched songs with total plays:", dataWithIds);
        setSongs(dataWithIds);
        setAllSongs(dataWithIds); // Store the original list of songs
        const albums = [...new Set(dataWithIds.map((song) => song.album))];
        setAllAlbums(albums);
      })
      .catch((error) => {
        console.error("Error fetching songs with total plays:", error);
      });
  }, []);

  // Handle search by query
  const handleSearch = () => {
    searchSongs(query)
      .then((response) => {
        const dataWithIds = response.data.map((song, index) => ({
          ...song,
          id: index, // Assign a unique id to each song
        }));
        console.log("Search results:", dataWithIds);
        setSongs(dataWithIds);
        setPage(1); // Reset to the first page
      })
      .catch((error) => {
        console.error("Error searching songs:", error);
      });
  };

  // Handle filter by year
  const handleFilterByYear = () => {
    fetchSongsByYear(year)
      .then((response) => {
        const dataWithIds = response.data.map((song, index) => ({
          ...song,
          id: index, // Assign a unique id to each song
        }));
        console.log("Songs by year:", dataWithIds);
        setSongs(dataWithIds);
        setPage(1); // Reset to the first page
      })
      .catch((error) => {
        console.error("Error fetching songs by year:", error);
      });
  };

  // Handle filter by album
  const handleFilterByAlbum = () => {
    if (album) {
      const filteredSongs = allSongs.filter(
        (song) => song.album.toLowerCase() === album.toLowerCase()
      );
      setSongs(filteredSongs);
    } else {
      setSongs(allSongs); // Reset to original list if no album is selected
    }
    setPage(1); // Reset to the first page
  };

  // Fetch popular songs from last month
  const handleFetchPopularLastMonth = () => {
    fetchPopularSongsLastMonth()
      .then((response) => {
        const dataWithIds = response.data.map((song, index) => ({
          ...song,
          id: index, // Assign a unique id to each song
        }));
        console.log("Popular songs last month:", dataWithIds);
        setSongs(dataWithIds);
        setPage(1); // Reset to the first page
      })
      .catch((error) => {
        console.error("Error fetching popular songs last month:", error);
      });
  };

  // Fetch popular songs of all time
  const handleFetchPopularAllTime = () => {
    fetchPopularSongsAllTime()
      .then((response) => {
        const dataWithIds = response.data.map((song, index) => ({
          ...song,
          id: index, // Assign a unique id to each song
        }));
        console.log("Popular songs all time:", dataWithIds);
        setSongs(dataWithIds);
        setPage(1); // Reset to the first page
      })
      .catch((error) => {
        console.error("Error fetching popular songs all time:", error);
      });
  };

  // Clear sorting and filters
  const clearSort = () => {
    setSongs(allSongs);
    setPage(1);
  };

  // Handle page change for pagination
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Clear search input and results
  const clearSearch = () => {
    setQuery("");
    setSongs(allSongs);
    setPage(1);
  };

  // Clear year filter and results
  const clearYearFilter = () => {
    setYear("");
    setSongs(allSongs);
    setPage(1);
  };

  // Clear album filter and results
  const clearAlbumFilter = () => {
    setAlbum("");
    setSongs(allSongs);
    setPage(1);
  };

  // Calculate the songs to be displayed on the current page
  const displayedSongs = songs.slice(
    (page - 1) * songsPerPage,
    page * songsPerPage
  );

  console.log("Displayed songs:", displayedSongs);

  return (
    <Container>
      <h1>All Songs</h1>
      <div className="filter-container">
        {/* Search by song name */}
        <TextField
          label="Search by Name"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="filter-item"
        />
        <Button
          variant="contained"
          className="filter-button"
          onClick={handleSearch}
        >
          Search
        </Button>
        <IconButton
          aria-label="clear search"
          onClick={clearSearch}
          disabled={!query}
        >
          <ClearIcon />
          Clear
        </IconButton>
      </div>
      <div className="filter-container">
        {/* Filter by year */}
        <TextField
          label="Filter by Year"
          variant="outlined"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="filter-item"
        />
        <Button
          variant="contained"
          className="filter-button"
          onClick={handleFilterByYear}
        >
          Filter
        </Button>
        <IconButton
          aria-label="clear year filter"
          onClick={clearYearFilter}
          disabled={!year}
        >
          <ClearIcon />
          Clear
        </IconButton>
      </div>
      <div className="filter-container">
        {/* Filter by album */}
        <TextField
          select
          label="Filter by Album"
          variant="outlined"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
          className="filter-item"
        >
          {allAlbums.map((albumName, index) => (
            <MenuItem key={index} value={albumName}>
              {albumName}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          className="filter-button"
          onClick={handleFilterByAlbum}
        >
          Filter
        </Button>
        <IconButton
          aria-label="clear album filter"
          onClick={clearAlbumFilter}
          disabled={!album}
        >
          <ClearIcon />
          Clear
        </IconButton>
      </div>
      <div className="filter-container">
        {/* Fetch popular songs */}
        <Button
          variant="contained"
          className="filter-button"
          onClick={handleFetchPopularLastMonth}
        >
          Popular Last Month
        </Button>
        <Button
          variant="contained"
          className="filter-button"
          onClick={handleFetchPopularAllTime}
        >
          Popular All Time
        </Button>
        <IconButton aria-label="clear sort" onClick={clearSort}>
          <ClearIcon />
          Clear
        </IconButton>
      </div>
      <Typography variant="h6" align="center" className="info-message">
        Click on a song to get more information!
      </Typography>
      <Grid container spacing={3} className="grid-container">
        {displayedSongs.map((song) => (
          <Grid item xs={12} sm={6} md={4} key={song.id}>
            <SongCard song={song} />
          </Grid>
        ))}
      </Grid>
      <div className="pagination-container">
        <Pagination
          count={Math.ceil(songs.length / songsPerPage)}
          page={page}
          onChange={handlePageChange}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#ff7f7f", // Taylor Swift's signature color
            },
            "& .Mui-selected": {
              backgroundColor: "#ff7f7f !important", // Ensure the selected page number is pink
              color: "#fff !important",
            },
          }}
        />
      </div>
    </Container>
  );
};

export default SongsPage;
