import styled from "styled-components";
export const MainSection = styled.section`
  position: relative;
  display: block;
  height: 100vh;
  width: 100%;
  background: #161616;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    // to-cosider
    // background-image: url("/src/assets/playstation-3-logo-black-and-white.png");
    background-size: 200px 200px;
    opacity: 0.05;
    z-index: 1;
  }
`;
export const PortfolioContainer = styled.div`
  position: relative;
  display: grid;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  max-width: 1280px;

  margin: 0 auto;
  padding: 15px;
  z-index: 5;
`;
