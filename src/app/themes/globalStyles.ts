import styled from "styled-components";

export const StyledMain = styled.main`
  postion: relative;
  transition: all 0.5s linear;
  color: ${({ theme }) => theme.text};
  // background-color: ${({ theme }) => theme.body};

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

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
`;
