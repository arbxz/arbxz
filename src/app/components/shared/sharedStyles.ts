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
  width: 100vw;
  margin: auto;
  overflow: hidden;
`;

export const StyledSliderTrack = styled.div`
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 22);
`;

export const StyledSlide = styled.div`
  height: 100px;
  width: 250px;
`;
