import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  styled,
} from "@mui/material";
import { NavLink } from "react-router-dom";

function Navbar() {
  const StyledNavLink = styled(NavLink)({
    textDecoration: "none",
    color: "#000",
    fontSize: "20px",
    "&.active": {
      backgroundColor: "blue",
      padding: 10,
      borderRadius: 5,
    },
  });

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "whitesmoke" }}>
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" style={{ color: "#000" }}>
              router 6.4 and above
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "50px",
              }}
            >
              <StyledNavLink to="/">Home</StyledNavLink>
              <StyledNavLink to="about">about</StyledNavLink>
              <StyledNavLink to="contactus">contact</StyledNavLink>
              <StyledNavLink to="careers">careers</StyledNavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
