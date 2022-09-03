import { useState } from "react";
import styled from "styled-components";
import { Arrow } from "../arrow";
import { SelectBox } from "./selectBox";

interface ISelectProps {
  values: string[];
  selectedValue: string;
  name: string;
  width: number;
  height: number;
  onSelect: (value: string) => void;
}

const StyledSelect = styled.div<{ width: number }>`
  min-width: ${(props) => props.width}px;
`;

const StyledTitleContainer = styled.div<{ height: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.height};
  padding: 4px;
  p {
    width: 2.5rem;
  }
  &:hover {
    cursor: pointer;
  }
`;

export function Select({
  values,
  selectedValue,
  name,
  width,
  height,
  onSelect,
}: ISelectProps) {
  const [showSelectBox, setShowSelectBox] = useState<boolean>(false);

  return (
    <StyledSelect width={width}>
      <StyledTitleContainer
        height={height}
        onClick={() => setShowSelectBox((prev) => !prev)}
      >
        <p>{selectedValue}</p>
        <Arrow rotated={showSelectBox} />
      </StyledTitleContainer>
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
