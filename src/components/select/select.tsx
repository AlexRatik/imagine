import { useState } from "react";
import styled from "styled-components";
import { SelectBox } from "./selectBox";
import { InputTitle } from "../inputTitle/inputTitle";

interface ISelectProps {
  values: string[];
  selectedValue: string;
  name: string;
  width: number;
  maxWidth?: number;
  height: number;
  onSelect: (value: string) => void;
}

const StyledSelect = styled.div<{ width: number; maxWidth: number }>`
  position: relative;
  min-width: ${(props) => props.width}px;
  max-width: ${(props) => props.maxWidth}px;
  @media (max-width: 1240px) {
    max-width: 80%;
    width: 80%;
  }
`;

export function Select({
  values,
  selectedValue,
  name,
  width,
  maxWidth,
  height,
  onSelect,
}: ISelectProps) {
  const [showSelectBox, setShowSelectBox] = useState<boolean>(false);
  return (
    <StyledSelect width={width} maxWidth={maxWidth || 1000}>
      <InputTitle
        onClick={() => setShowSelectBox((prev) => !prev)}
        height={height}
        text={selectedValue}
        rotated={showSelectBox}
      />
      <SelectBox
        name={name}
        values={values}
        isShow={showSelectBox}
        height={height}
        onSelect={onSelect}
        selectedValue={selectedValue}
      />
    </StyledSelect>
  );
}
