import styled from "styled-components";

export const StyledMainBanner = styled.section``;

export const StyledNoteCard = styled.span`
  border-radius: 5px;
  color: #333333;
  background: white;
  box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.3);
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
