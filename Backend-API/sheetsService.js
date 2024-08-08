const fs = require("fs");
const csv = require("csv-parser");

// Authorize a client with credentials, then call the callback function
function authorize(credentials, callback) {
  console.log("No authorization needed for local CSV file.");
  callback();
}

// List songs from the specified CSV document
function listSongs(callback) {
  const results = [];
  fs.createReadStream("C:\\Users\\rcoul\\Desktop\\swiftcloud-api\\songs.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      if (results.length) {
        const songs = results.map((row) => ({
          title: row.title, // Song
          album: row.album, // Album
          year: row.year, // Year
          artist: row.artist, // Artist
          plays_june: row.plays_june, // Plays - June
          plays_july: row.plays_july, // Plays - July
          plays_august: row.plays_august, // Plays - August
        }));
        callback(null, songs);
      } else {
        console.log("No data found.");
        callback(new Error("No data found"), null);
      }
    });
}

module.exports = { authorize, listSongs };
