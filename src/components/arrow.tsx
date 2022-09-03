import styled from "styled-components";

const StyledArrow = styled.div`
  display: inline-block;
  margin-left: 10px;
  width: 10px;
  height: 10px;
  border: 2px solid #b8b8b8;
  border-left: none;
  border-top: none;
  transform: rotate(45deg) translate(-50%);
  &:hover {
    cursor: pointer;
  }
`;

export function Arrow() {
  return <StyledArrow />;
}
