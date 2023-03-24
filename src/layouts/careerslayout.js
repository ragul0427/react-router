import { Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Careerslayout() {
  return (
    <div>
      <h1>we create learning and developing,always studies....</h1>
      <Container sx={{ p: 5 }}>
        <Outlet />
      </Container>
    </div>
  );
}
