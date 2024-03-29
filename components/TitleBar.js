import styled from "styled-components";

const Headline = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-blue-dark);
  box-shadow: 3px 1px 5px var(--color-blue-dark);
  color: var(--color-orange-dark);
  font-size: 2.2rem;
  margin: 0;
  padding: 20px;
  text-align: center;
  z-index: 1;
`;

export default function TitleBar() {
  return <Headline>Tourio</Headline>;
}
