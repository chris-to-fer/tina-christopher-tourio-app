import styled from "styled-components";
import { StyledLink } from "./StyledLink";

export const StyledBackLink = styled(StyledLink)`
  text-align: center;
  font-size: 0.7rem;
  background-color: var(--color-orange-light);
  padding: 0.2rem auto;
  border: 1px solid var(--color-blue-dark);
  width: 100px;
  position: fixed;
  top: 70px;
  right: 10px;
  z-index: 2;
`;
