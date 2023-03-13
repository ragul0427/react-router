import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CareerList from "../components/careersList";
import styled from "styled-components";

export default function Careers() {
  const careerData = useLoaderData();
  console.log(careerData);

  const StyledLink = styled(Link)({
    textDecoration: "none",
  });

  return (
    <div>
      <h1> Hello Careers</h1>
      {careerData &&
        careerData.map((career, index) => {
          return (
            <StyledLink to={career.id.toString()} key={career.id}>
              <CareerList title={career.title} location={career.location} />
            </StyledLink>
          );
        })}
    </div>
  );
}

export const careerLoader = async () => {
  const response = await fetch("http://localhost:8000/careers");

  // if (!response.ok) {
  //   throw new Error("job not found");
  // }
  const jsonResponse = await response.json();

  return jsonResponse;
};
