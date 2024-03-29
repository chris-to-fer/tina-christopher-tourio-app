import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --color-white: #F7F5FB;
    --color-orange-light: #F9AB55;
    --color-orange-dark: #F58A07;
    --color-blue-light: #909CC2;
    --color-blue-dark: #084887;

    --border-radius-small: 0.8rem;

    --gap: 20px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--color-blue-dark)
  }

  h1 {
    color: var(--color-orange-light)
  }

  h2 {
    color: var(--color-orange-dark)
  }

  p {
    color: var(--color-blue-light)
  }

  span {
    color: var(--color-orange-light)

  }
`;
