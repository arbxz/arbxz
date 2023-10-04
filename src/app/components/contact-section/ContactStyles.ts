import styled from "styled-components";

export const StyledMessageBoxWrapper = styled.div`
  //   background: #e5f4f4;
  //   background: #408f92;
`;

export const StyledMessageBox = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #e5e5f7;
    opacity: 0.3;
    background-image: linear-gradient(135deg, #444cf7 25%, transparent 25%),
      linear-gradient(225deg, #444cf7 25%, transparent 25%),
      linear-gradient(45deg, #444cf7 25%, transparent 25%),
      linear-gradient(315deg, #444cf7 25%, #e5e5f7 25%);
    background-position: 30px 0, 30px 0, 0 0, 0 0;
    background-size: 60px 60px;
    background-repeat: repeat;
  }
`;

export const StyledMessageHeader = styled.div`
  position: relative;
  color: #ffffff;
  background: #333333;
`;

export const StyledMessageItem = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  background: ${({ theme }) => theme.backgroundShade};
  max-width: 75%;

  &:nth-child(odd) {
    margin-left: auto;
    background: ${({ theme }) => theme.background};
  }
`;
