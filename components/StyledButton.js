import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background: rgb(249 171 85 / 85%);
  font-size: 0.8rem;
  padding: 0.6rem 0.8rem;
  border-radius: var(--border-radius-small);
  color: var(--color-white);
  text-decoration: none;
  font-weight: bold;
  border: none;

  ${({ variant }) =>
    variant === "delete" &&
    css`
      color: firebrick;
    `}
`;
