import styled from "styled-components";

interface ISelectOptionProps {
  value: string;
  name: string;
  height: number;
  onInput: (value: string) => void;
  checked: boolean;
}

const StyledSelectOption = styled.div<{ height: number }>`
  height: ${(props) => props.height}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  padding: 4px;
  &:hover {
    background-color: #c7c7c7ff;
    color: #ffffff;
  }
  label,
  input {
    cursor: pointer;
  }
  label {
    width: 100%;
  }
`;

export function SelectOption({
  value,
  name,
  height,
  onInput,
  checked,
}: ISelectOptionProps) {
  return (
    <StyledSelectOption height={height}>
      <label htmlFor={value}>{value}</label>
      <input
        type="radio"
        id={value}
        name={name}
        onChange={() => onInput(value)}
        checked={checked}
      />
    </StyledSelectOption>
  );
}
