import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import SongsPage from "./pages/SongsPage";
import PopularSongsPage from "./pages/PopularSongsPage";
import ContactUsPage from "./pages/ContactUsPage";
import SongDetailPage from "./pages/SongDetailPage"; // Import the new component
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/songs" exact element={<SongsPage />} />
          <Route path="/songs/:id" element={<SongDetailPage />} />{" "}
          {/* Add route for song details */}
          <Route path="/popular" element={<PopularSongsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
