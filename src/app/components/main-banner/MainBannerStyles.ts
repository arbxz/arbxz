import styled from "styled-components";

export const StyledMainBanner = styled.div`
  // &::before {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-color: rgba(200, 143, 255, 1);
  //   opacity: 0.8;
  //   background-image: repeating-radial-gradient(
  //       circle at 0 0,
  //       transparent 0,
  //       rgba(200, 143, 255, 1) 10px
  //     ),
  //     repeating-linear-gradient(rgba(165, 71, 255, 1), rgba(88, 0, 255, 1));
  //   z-index: -1;
  // }
`;

export const StyledMainTitle = styled.h1`
  display: block;
  color: white;
  font-size: 5rem;
  font-weight: 600;
`;

export const StyledNoteCard = styled.span`
  border-radius: 5px;
  background: white;
  box-shadow: 5px 5px 3px 3px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 5px 5px 3px 3px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 5px 5px 3px 3px rgba(0, 0, 0, 0.3);
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
    top: 50%;
    left: -2.5px;
    transform: translateY(-50%);
    height: 50%;
    width: 5px;
    background: #333333;
  }
`;

export const StyledSocialContainer = styled.div`
  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
`;
