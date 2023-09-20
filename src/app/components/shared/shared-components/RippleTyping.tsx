import styled from "styled-components";
const StyledTypingDots = styled.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  margin: 0 5px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: inherit;
    border-radius: 50%;
    z-index: -1;
    animation: ripple 1.5s ease-out infinite;
  }

  &:first-child {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }

  &:first-child::before {
    animation-delay: 0.2s;
  }

  &:nth-child(2) {
    background-color: ${({ theme }) => theme.backgroundSecondary};
    transform: scale(0.9);
  }

  &:nth-child(2)::before {
    animation-delay: 0.4s;
  }

  &:nth-child(3) {
    background-color: ${({ theme }) => theme.backgroundSecondary};
    transform: scale(0.8);
  }

  &:nth-child(3)::before {
    animation-delay: 0.6s;
  }

  &:nth-child(4) {
    background-color: ${({ theme }) => theme.backgroundSecondary};
    transform: scale(0.7);
  }

  &:nth-child(4)::before {
    animation-delay: 0.8s;
  }

  &:last-child {
    background-color: ${({ theme }) => theme.backgroundSecondary};
    transform: scale(0.6);
  }

  &:last-child::before {
    animation-delay: 1s;
  }

  @keyframes ripple {
    from {
      opacity: 1;
      transform: scale(0);
    }
    to {
      opacity: 0;
      transform: scale(4);
    }
  }
`;
const RippleTypingDots = () => {
  return (
    <>
      <StyledTypingDots />
      <StyledTypingDots />
      <StyledTypingDots />
      <StyledTypingDots />
    </>
  );
};

export default RippleTypingDots;
