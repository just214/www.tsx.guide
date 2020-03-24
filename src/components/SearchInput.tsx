import React, { forwardRef } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Container = styled.div`
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  padding: 10px 15px;
  border-radius: 50px;
  width: 100%;
  appearance: none;
  border: 1px solid var(--ifm-color-emphasis-300);
  background: var(--ifm-color-emphasis-100);
  color: var(--ifm-color-emphasis-800);
  font-weight: 500;
  font-size: 20px;

  outline: none;
  text-indent: 35px;
`;

const SearchIcon = styled(FaSearch)`
  position: relative;
  top: 38px;
  right: -25px;
  color: var(--ifm-color-emphasis-600);
`;

export const SearchInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <Container>
      <SearchIcon size={14} />
      <StyledInput ref={ref} {...props} />
    </Container>
  );
});
