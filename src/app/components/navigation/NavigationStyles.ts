import styled from "styled-components";

export const StyledNavigationWrapper = styled.nav`
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background: var(--background);
    transition: width 0.3s ease-out;
    z-index: -1;
  }

  &.content-scrolled {
    &::before {
      width: 100%;
    }
  }
`;
