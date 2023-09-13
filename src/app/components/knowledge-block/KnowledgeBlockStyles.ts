import styled, { css } from "styled-components";

export const StyledSkillBlock = styled.div``;

export const StyledScreenDummy = styled.div`
  border: 2px solid #333333;
`;

interface StyledSkillButtonProps {
  isDark?: boolean;
}

export const StyledSkillButton = styled.span<StyledSkillButtonProps>`
  border: 1px solid #333333;

  ${(props) => css`
    color: ${props.isDark ? "white" : "#333333"};
    background: ${props.isDark ? "#333333" : "white"};
  `}
`;
