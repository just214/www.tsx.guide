import styled from "styled-components";

export const ResourceLink = styled.a`
  display: inline-block;
  margin: 5px;
  padding: 4px 8px;
  background: transparent;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  background: var(--ifm-color-primary);
  border: 1px solid var(--ifm-color-primary);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: white;
    text-decoration: none;
    opacity: 0.9;
  }
`;
