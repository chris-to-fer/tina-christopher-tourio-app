import styled, { css } from "styled-components";

export const StyledLink = styled.a`
  background: rgb(249 171 85 / 90%);
  font-size: 0.8rem;
  padding: 0.6rem 0.8rem;
  border-radius: var(--border-radius-small);
  color: var(--color-blue-dark);
  text-decoration: none;
  font-weight: bold;
  align-self: center
    ${({ justifySelf }) =>
      justifySelf &&
      css`
        justify-self: ${justifySelf};
      `}
    ${({ variant }) =>
      variant === "outlined" &&
      css`
        text-align: center;
        background-color: white;
        border: 3px solid lightsalmon;
      `};
`;
