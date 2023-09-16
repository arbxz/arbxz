import styled from "styled-components";

export const StyledMainBanner = styled.section``;

export const StyledMainTitle = styled.h1`
  display: block;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`;

export const StyledNoteCard = styled.span`
  border-radius: 5px;
  color: #333333;
  background: white;
  box-shadow: 5px 5px 3px 3px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 5px 5px 3px 3px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 5px 5px 3px 3px rgba(0, 0, 0, 0.3);
`;

export const StyledHighlightedText = styled.div`
  display: inline-block;
  width: auto;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textSecondary};
  padding: 0 1rem;
  max-width: 20rem;
`;

export const StyledBiocontent = styled.div`
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -2.5px;
    transform: translateY(-50%);
    height: 50%;
    width: 5px;
    background: ${({ theme }) => theme.background};
  }
`;

export const StyledSocialContainer = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textSecondary};
  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
`;
