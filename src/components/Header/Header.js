import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const pages = [
    { name: "Home", route: "/" },
    { name: "Devices", route: "/devices" },
  ];
  return (
    <AppBar className="Header" position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          {pages.map((page) => (
            <Button
            variant="contained" 
              color="secondary"
              component={Link}
              key={page.name}
              sx={{ mx: 1, display: "block" }}
              to={page.route}
            >
              {page.name}
            </Button>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
