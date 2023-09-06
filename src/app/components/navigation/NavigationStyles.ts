import styled from "styled-components";
interface StyledNavigationProps {
  isContentScrolled: boolean;
}

export const StyledNavigationWrapper = styled.nav<StyledNavigationProps>`
  transition: background ease-out 0.3s, backdrop-filter ease-out 0.3s;
  z-index: 99;
`;
