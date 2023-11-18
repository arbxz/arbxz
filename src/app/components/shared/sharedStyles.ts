import styled from "styled-components";

interface DarkThemeProps {
  isDark?: boolean;
}

export const StyledHighlightedText = styled.div<DarkThemeProps>`
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
  width: 100%;
  margin: auto;
  overflow: hidden;
`;

export const StyledSliderTrack = styled.div`
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
`;

export const StyledSlide = styled.div`
  height: 100px;
  width: 250px;
`;
