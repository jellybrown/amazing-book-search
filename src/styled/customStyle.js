import styled from "styled-components";

export const Input = styled.input`
  color: #333;
  border: 1px solid #ddd;
  width: 100%;
  padding: 1em;
  border-radius: 30px;
  text-align: center;
  outline: none;
  &::placeholder {
    color: #bbb;
  }
`;

export const SearchButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0.6;
  transition: 0.3s;
  :hover {
    opacity: 1;
    transition: 0.3s;
  }
`;
