import styled from "styled-components";

export const StyledMessageBoxWrapper = styled.div`
  //   background: #e5f4f4;
  //   background: #408f92;
`;

export const StyledMessageBox = styled.div``;

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
