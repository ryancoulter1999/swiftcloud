import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";
import AlbumIcon from "@mui/icons-material/Album"; // Import the Album icon

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <AlbumIcon className="navbar-icon" />
        <Typography variant="h5" className="navbar-title">
          SwiftCloud Music
        </Typography>
        <Button color="inherit">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/songs" className="navbar-link">
            Songs
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/popular" className="navbar-link">
            Popular Songs
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/contact" className="navbar-link">
            Contact Us
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
