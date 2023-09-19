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
  position: relative;
  display: flex;
  max-width: 75%;
  width: fit-content;
  font-size: 16px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textSecondary};
  border-radius: 5px;
  padding: 10px 10px;

  &:nth-child(odd) {
    margin-left: auto;
  }
`;
