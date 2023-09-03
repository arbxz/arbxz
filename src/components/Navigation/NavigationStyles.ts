import styled from "styled-components";

export const NavigationContainer = styled.nav`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  justify-self: flex-start;

  height: min-content;
  width: 100%;

  border-radius: 10px;

  > a {
    display: block;

    font-size: 1.6rem;
    font-weight: 900;
    color: #c7493a;

    &:hover {
      text-decoration: none;
      color: #c7493a;
    }
  }

  button {
    display: flex;
    justify-self: flex-end;
  }
`;
