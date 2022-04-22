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
    <AppBar className="Header" r>
      <Container maxWidth="xl">
        <Toolbar>
          {pages.map((page) => (
            <Button
              component={Link}
              key={page.name}
              sx={{ mx: 1, color: "white", display: "block" }}
              to={page.route}
            >
              <Typography textAlign="center">{page.name}</Typography>
            </Button>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
