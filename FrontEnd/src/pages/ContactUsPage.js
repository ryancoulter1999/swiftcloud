import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import "../App.css";

const ContactUsPage = () => {
  return (
    <Container className="root-container">
      <Typography variant="h1">Contact Us</Typography>
      <form className="contact-us-form">
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          className="contact-us-field"
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          className="contact-us-field"
        />
        <TextField
          label="Message"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          className="contact-us-field"
        />
        <Button
          variant="contained"
          color="primary"
          className="contact-us-button"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactUsPage;
