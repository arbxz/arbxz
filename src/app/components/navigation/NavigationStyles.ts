import styled, { css } from "styled-components";

interface StyledNavigationProps {
  isContentScrolled: boolean;
}

export const StyledNavigationWrapper = styled.nav<StyledNavigationProps>`
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    ${(props) =>
      css`
        opacity: ${props.isContentScrolled ? 1 : 0};
        visibility: ${props.isContentScrolled ? "visible" : "hidden"};
      `}
    transition: opacity 0.3s ease-out, visibility 0.3s ease-out;
    z-index: -1;
  }

  z-index: 99;
`;
