import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const fetchSongs = () => {
  return axios.get(`${API_BASE_URL}/songs`);
};

export const searchSongs = (query) => {
  return axios.get(`${API_BASE_URL}/songs/search?q=${query}`);
};

export const fetchSongsByYear = (year) => {
  return axios.get(`${API_BASE_URL}/songs/year/${year}`);
};

export const fetchPopularSongsLastMonth = () => {
  return axios.get(`${API_BASE_URL}/songs/popular/month`);
};

export const fetchPopularSongsAllTime = () => {
  return axios.get(`${API_BASE_URL}/songs/popular/all`);
};

export const fetchSongsWithTotalPlays = () => {
  return axios.get(`${API_BASE_URL}/songs/with-total-plays`);
};
