import styled, { css } from "styled-components";

interface StyledModalProps {
  isOpen: boolean;
}
// TODO SET UP LG/MD/SM SIZE FOR MODAL
export const StyledModal = styled.div<StyledModalProps>`
  ${(props) => css`
    display: ${props.isOpen ? "block" : "none"};
  `}

  &::before {
    content: "";
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    opacity: 0.5;
    z-index: 0;
  }
`;
