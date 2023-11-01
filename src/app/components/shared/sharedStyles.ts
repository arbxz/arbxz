import styled from "styled-components";

export const StyledScreenDummy = styled.div`
  background: ${({ theme }) => theme.backgroundSecondary};
`;

interface DarkThemeProps {
  isDark?: boolean;
}

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.text};
`;

export const StyledHighlightedText = styled.div<DarkThemeProps>`
  display: inline-block;
  width: auto;
  padding: 0 1rem;
  margin-bottom: 3px;
  color: ${({ isDark, theme }) => (isDark ? theme.text : theme.textSecondary)};
  background: ${({ isDark, theme }) =>
    isDark ? theme.backgroundSecondary : theme.background};
`;

export const StyledSkillButton = styled.button<DarkThemeProps>`
  border: 1px solid ${({ theme }) => theme.text};
  color: ${({ isDark, theme }) => (isDark ? theme.textSecondary : theme.text)};
  background: ${({ isDark, theme }) =>
    isDark ? theme.background : theme.backgroundSecondary};
`;

export const StyledPrimaryButton = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textSecondary};
`;

export const StyledDummyHeader = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textSecondary};
`;
