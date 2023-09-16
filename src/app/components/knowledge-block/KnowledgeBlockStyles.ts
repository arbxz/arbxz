import styled, { css } from "styled-components";

export const StyledSkillBlock = styled.section``;

export const StyledScreenDummy = styled.div`
  background: ${({ theme }) => theme.backgroundSecondary};
  border: 2px solid ${({ theme }) => theme.text};
`;

interface StyledSkillButtonProps {
  isDark?: boolean;
}

export const StyledSkillButton = styled.button<StyledSkillButtonProps>`
  position: relative;
  border: 1px solid ${({ theme }) => theme.text};
  color: ${({ isDark, theme }) => (isDark ? theme.textSecondary : theme.text)};
  background: ${({ isDark, theme }) =>
    isDark ? theme.background : "theme.backgroundSecondary"};
`;
