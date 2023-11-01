import styled, { css } from "styled-components";

interface StyledRippleButtonProps {
  color?: string;
  children: React.ReactNode;
}

const StyledRippleButton = styled.div<StyledRippleButtonProps>`
  position: relative;

  > div {
    position:absolute;
    top:-15px;
    left:-15px;
    transform: translate(-50%,-50%);
    animation: growAndFade 3s infinite ease-out;
    background-color: ${({ color }) => color};
    border-radius: 50%;
    width: 70px;
    height: 70px;
    opacity: 0;
    z-index:1;
  }
  
  .circle1 {
    animation-delay: 1s;    
  }
  .circle2 {
    animation-delay: 2s; 
  }
  .circle3 {
    animation-delay: 3s;
  }
}

@keyframes growAndFade {
  0% {
    opacity: .75;
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
`;

const RippleButtonWrapper = ({ color, children }: StyledRippleButtonProps) => {
  return (
    <StyledRippleButton color={color}>
      <div></div>
      <div></div>
      <div></div>
      {children}
    </StyledRippleButton>
  );
};

export default RippleButtonWrapper;
