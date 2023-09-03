import styled from "styled-components";

export const AboutSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

export const AboutParagraph = styled.div`
  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
  }

  @keyframes blink-caret-secondary {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #c7493a;
    }
  }

  display: block;
  text-align: right;

  h1 {
    font-size: 4rem;
    white-space: nowrap;
    color: #c7493a;

    margin: 0 0 1rem auto;
    padding: 0;

    border-right: 0.15em solid white;
    overflow: hidden;
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  }

  h2 {
    font-size: 3rem;
    white-space: nowrap;
    color: #fffff;
    margin: 0 0 2rem auto;
    padding: 0;

    border-right: 0.15em solid #c7493a;
    overflow: hidden;
    animation: typing 3.5s steps(40, end),
      blink-caret-secondary 0.75s step-end infinite;
  }
  p {
    display: block;
    padding: 0;

    font-size: 1.2rem;
    font-weight: 600;
    color: #c7493a;
  }
`;
