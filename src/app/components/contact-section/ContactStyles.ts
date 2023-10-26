import styled from "styled-components";

export const StyledMessageBox = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #f7eee6;
    opacity: 0.9;
    background-image: linear-gradient(135deg, #f74545 25%, transparent 25%),
      linear-gradient(225deg, #f74545 25%, transparent 25%),
      linear-gradient(45deg, #f74545 25%, transparent 25%),
      linear-gradient(315deg, #f74545 25%, #f7eee6 25%);
    background-position: 27px 0, 27px 0, 0 0, 0 0;
    background-size: 27px 27px;
    background-repeat: repeat;
  }
`;
