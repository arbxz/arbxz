import styled from "styled-components";

export const StyledHighlightedText = styled.div`
  display: inline-block;
  width: auto;
  padding: 0 1rem;
  margin-bottom: 3px;
  color: var(--background);
  background: var(--foreground);
`;

export const StyledSlider = styled.div`
  position: relative;
  height: 100px;
  margin: 0 auto;
  width: 100vw;
  overflow: hidden;
`;

export const StyledSliderTrack = styled.div`
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 18);
`;

export const StyledSlide = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  height: 100px;
  width: 250px;
`;
