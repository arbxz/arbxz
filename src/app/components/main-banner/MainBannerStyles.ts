import styled from "styled-components";

export const StyledMainBanner = styled.div`
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #e5e5f7;
    opacity: 0.8;
    background-image: radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
    background-size: 10px 10px;
    z-index: -1;
  }
`;

export const StyledMainTitle = styled.h1`
  display: block;
  color: #333333;
  font-size: 4rem;
  font-weight: 600;
`;

export const StyledNoteCard = styled.span`
  //   border: 2px dashed #333333;
  border-radius: 5px;
  background: white;
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.75);
`;

export const StyledHighlightedText = styled.p`
  display: inline-block;
  width: auto;
  background: #333333;
  color: white;
  padding: 0 1rem;
  max-width: 20rem;
`;

export const StyledBiocontent = styled.div`
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -2.5px;
    height: 100%;
    width: 5px;
    background: #333333;
  }
`;
