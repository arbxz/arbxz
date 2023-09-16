import styled from "styled-components";

export const StyledMain = styled.main`
  position: relative;
  transition: all 0.5s linear;
  color: ${({ theme }) => theme.text};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.body};
    background-image: radial-gradient(
      #8a8a8a 2px,
      ${({ theme }) => theme.body} 2px
    );
    background-size: 40px 40px;
    z-index: -1;
  }
`;

export const StyledThemeButton = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textSecondary};
`;
