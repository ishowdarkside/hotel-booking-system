import styled, { css } from "styled-components";

interface PropTypes {
  as: "h1" | "h2" | "h3";
}

const Heading = styled.h1<PropTypes>`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

   ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1rem;
      font-weight: 500;
    `} 


  font-weight: 600;
`;

Heading.defaultProps = {
  as: "h3",
};

export default Heading;
