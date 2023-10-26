import styled, { css } from "styled-components";

interface StyledModalProps {
  isOpen: boolean;
}
// TODO SET UP LG/MD/SM SIZE FOR MODAL
export const StyledModal = styled.div<StyledModalProps>`
  ${(props) => css`
    visibility: ${props.isOpen ? "visible" : "hidden"};
    opacity: ${props.isOpen ? "1" : "0"};
  `}

  transition: opacity 0.3s ease-in-out, visibility .3s ease-out;

  &::before {
    content: "";
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
    ${(props) => css`
      opacity: ${props.isOpen ? "0.9" : "0"};
    `}
    z-index: 0;
    transition: opacity 0.3s ease-out;
  }
`;
