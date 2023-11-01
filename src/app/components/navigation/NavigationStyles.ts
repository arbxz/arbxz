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
    ${(props) => css`
      width: ${props.isContentScrolled ? "100%" : 0};
    `}
    background: white;
    transition: width 0.3s ease-out;
    z-index: -1;
  }
  z-index: 45;
`;
