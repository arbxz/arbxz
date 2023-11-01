import styled from "styled-components";

export const StyledMain = styled.main`
  transition: all 0.5s linear;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
`;

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textSecondary};
`;
