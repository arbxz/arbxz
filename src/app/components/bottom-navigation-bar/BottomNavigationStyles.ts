import styled from "styled-components";

export const StyledHiddenButtons = styled.div``;

export const StyledNavButton = styled.button`
  position: relative;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justoify-content: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: 50%;

  span {
    display: none;
  }
`;

export const StyledBottomNavigation = styled.nav`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textSecondary};
  box-shadow: 4px -4px 2px rgba(200, 252, 234, 0.9),
    -5px 5px 2px rgba(255, 0, 255, 0.3);
  transition: max-width 0.3s ease-out;

  &:hover {
    max-width: 20rem;
  }
`;
