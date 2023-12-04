import styled from "styled-components";

export const StyledNavigationWrapper = styled.nav`
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    background: var(--accent);
    transition: opacity 0.3s ease-out;
    z-index: -1;
  }

  &.content-scrolled {
    &::before {
      opacity: 1;
    }
  }
`;
