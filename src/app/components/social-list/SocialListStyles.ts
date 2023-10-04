import styled from "styled-components";

export const StyledSocialContainer = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textSecondary};
  box-shadow: 5px -5px 2px rgba(200, 252, 234, 0.9),
    -5px 5px 2px rgba(255, 0, 255, 0.3);
`;
