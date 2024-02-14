import Image from "next/image.js";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: var(--border-radius-small);
  box-shadow: 3px 3px 20px var(--color-blue-light);
`;
