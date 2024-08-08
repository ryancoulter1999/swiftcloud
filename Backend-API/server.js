const express = require("express");
const fs = require("fs");
const cors = require("cors");
const csv = require("csv-parser");

const app = express();
const PORT = process.env.PORT || 3000;
const CSV_FILE_PATH = "C:\\Users\\rcoul\\Desktop\\swiftcloud-api\\songs.csv"; // Update the path as needed

let songs = [];

app.use(express.json());
app.use(cors());

// Read CSV file and store data in songs array
fs.createReadStream(CSV_FILE_PATH)
  .pipe(csv())
  .on("data", (row) => {
    songs.push({
      title: row.Song,
      artist: row.Artist,
      writer: row.Writer,
      album: row.Album,
      year: row.Year,
      plays_june: row["Plays - June"],
      plays_july: row["Plays - July"],
      plays_august: row["Plays - August"],
      plays:
        (Number(row["Plays - June"]) || 0) +
        (Number(row["Plays - July"]) || 0) +
        (Number(row["Plays - August"]) || 0),
    });
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
  })
  .on("error", (err) => {
    console.error("Error reading CSV file:", err);
  });

// Root endpoint - Welcome message
app.get("/", (req, res) => {
  res.send("Welcome to SwiftCloud API!");
});

// Endpoint to list all songs
app.get("/songs", (req, res) => {
  res.json(songs);
});

// Endpoint to list all songs with the corresponding total plays
app.get("/songs/with-total-plays", (req, res) => {
  const songsWithTotalPlays = songs.map((song) => ({
    ...song,
    plays:
      (Number(song.plays_june) || 0) +
      (Number(song.plays_july) || 0) +
      (Number(song.plays_august) || 0),
  }));
  res.json(songsWithTotalPlays);
});

// Endpoint to list songs by year
app.get("/songs/year/:year", (req, res) => {
  const year = req.params.year;
  const filteredSongs = songs
    .filter((song) => song.year == year)
    .map((song) => ({
      ...song,
      plays:
        (Number(song.plays_june) || 0) +
        (Number(song.plays_july) || 0) +
        (Number(song.plays_august) || 0),
    }));
  res.json(filteredSongs);
});

// Endpoint to list the most popular songs last month
app.get("/songs/popular/month", (req, res) => {
  const monthPlaysFields = [
    "plays_january",
    "plays_february",
    "plays_march",
    "plays_april",
    "plays_may",
    "plays_june",
    "plays_july",
    "plays_august",
    "plays_september",
    "plays_october",
    "plays_november",
    "plays_december",
  ];
  const currentMonth = new Date().getMonth();
  const lastMonthIndex = currentMonth === 0 ? 11 : currentMonth - 1;
  const monthPlaysField = monthPlaysFields[lastMonthIndex];

  const popularSongsLastMonth = songs
    .map((song) => ({
      ...song,
      plays: Number(song[monthPlaysField]) || 0,
    }))
    .sort((a, b) => b.plays - a.plays);

  res.json(popularSongsLastMonth);
});

// Endpoint to list the most popular songs of all time
app.get("/songs/popular/all", (req, res) => {
  const popularSongsAllTime = songs
    .map((song) => ({
      ...song,
      plays:
        (Number(song.plays_june) || 0) +
        (Number(song.plays_july) || 0) +
        (Number(song.plays_august) || 0),
    }))
    .sort((a, b) => b.plays - a.plays);

  res.json(popularSongsAllTime);
});

// Endpoint to search for songs
app.get("/songs/search", (req, res) => {
  const query = req.query.q ? req.query.q.toLowerCase() : "";
  const filteredSongs = songs
    .filter(
      (song) =>
        (song.title && song.title.toLowerCase().includes(query)) ||
        (song.artist && song.artist.toLowerCase().includes(query)) ||
        (song.album && song.album.toLowerCase().includes(query))
    )
    .map((song) => ({
      ...song,
      plays:
        (Number(song.plays_june) || 0) +
        (Number(song.plays_july) || 0) +
        (Number(song.plays_august) || 0),
    }));
  res.json(filteredSongs);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
