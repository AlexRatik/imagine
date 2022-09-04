import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { SelectOption } from "./selectOption";

interface ISelectProps {
  values: string[];
  name: string;
  isShow: boolean;
  height: number;
  onSelect: (value: string) => void;
  selectedValue: string;
}

const StyledSelectBox = styled.div<{ isShow: boolean }>`
  z-index: 2;
  position: absolute;
  width: 100%;
  margin-top: 7px;
  transition: all 0.35s ease-in-out;
  background-color: #ffffff;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transform: ${(props) =>
    props.isShow ? "translateY(0)" : "translateY(-100%)"};
  pointer-events: ${(props) => (props.isShow ? "all" : "none")};
`;

export function SelectBox({
  values,
  name,
  isShow,
  height,
  onSelect,
  selectedValue,
}: ISelectProps) {
  return (
    <StyledSelectBox isShow={isShow}>
      {values.map((value) => (
        <SelectOption
          name={name}
          key={uuidv4()}
          value={value}
          height={height}
          onInput={onSelect}
          checked={selectedValue === value}
        />
      ))}
    </StyledSelectBox>
  );
}
