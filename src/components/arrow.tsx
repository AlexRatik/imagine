import styled from "styled-components";

const StyledArrow = styled.div<{ rotated: boolean }>`
  display: inline-block;
  margin-left: 10px;
  width: 10px;
  height: 10px;
  border: 2px solid #b8b8b8;
  border-left: none;
  border-top: none;
  transition: all 0.25s ease-in-out;
  transform: rotate(${(props) => (props.rotated ? -135 : 45)}deg)
    translateX(${(props) => (props.rotated ? -50 : 0)}%)
    translate(${(props) => (props.rotated ? 50 : -50)}%);
  &:hover {
    cursor: pointer;
  }
`;

interface IArrowProps {
  rotated: boolean;
}

export function Arrow({ rotated }: IArrowProps) {
  return <StyledArrow rotated={rotated} />;
}
