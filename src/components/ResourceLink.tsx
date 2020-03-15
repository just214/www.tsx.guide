import styled from "styled-components";

export const ResourceLink = styled.a`
  padding: 5px 10px;
  background: transparent;
  color: var(--ifm-color-primary);
  border-radius: 30px;
  border: 1px solid var(--ifm-color-primary);
  cursor: pointer;
  text-decoration: none;
  margin-right: 10px;
  &:hover {
    text-decoration: none;
  }
`;
