import React from "react";
import { Container, Typography, Button } from "@mui/material";
import "../App.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Container>
        <Typography variant="h2" className="landing-page-title">
          SwiftCloud Music
        </Typography>
        <Typography variant="body1" className="landing-page-subtitle">
          Discover the best music here. Search for songs, see the most popular
          ones, and get all the information you need.
        </Typography>
        <Button id="show-easter-egg">Hover to Reveal a Surprise!</Button>
        <div className="easter-egg">
          🎵 "Shake it off, shake it off! Over to Popular Songs to see the top
          10 most played songs" 🎵
        </div>
        <div className="album-images">
          <img src="/Lovers.png" alt="Lovers" className="album-image" />
          <img src="/SpeakNow.png" alt="Speak Now" className="album-image" />
          <img src="/Red.png" alt="Red" className="album-image" />
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
