import React from "react";
import Navigation from "../Navigation/Navigation";
import Homepage from "./../Homepage/Homepage";
import { MainSection, PortfolioContainer } from "./PorfolioStyles";

const Portfolio = () => {
  return (
    <MainSection>
      <PortfolioContainer>
        <Navigation />
        <Homepage />
      </PortfolioContainer>
    </MainSection>
  );
};

export default Portfolio;
