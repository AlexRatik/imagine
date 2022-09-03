import styled from "styled-components";

interface ISelectOptionProps {
  value: string;
  name: string;
  height: number;
  onInput: (value: string) => void;
  checked: boolean;
}

const StyledSelectOption = styled.div<{ height: number }>`
  position: relative;
  height: ${(props) => props.height}px;
  width: 100%;
  line-height: ${(props) => props.height}px;
  border-radius: 10px;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #c7c7c7ff;
    color: #ffffff;
  }
  label {
    width: 100%;
    cursor: pointer;
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
      <StyledRadioInput
        type="radio"
        id={value}
        name={name}
        onChange={() => onInput(value)}
        checked={checked}
        height={height}
      />
      <label htmlFor={value}>{value}</label>
    </StyledSelectOption>
  );
}

const StyledRadioInput = styled.input<{ height: number }>`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -1000px;
  }

  &:checked + label,
  &:checked:not(:checked) + label {
    position: relative;
    cursor: pointer;
    display: inline-block;
    color: #000000;
  }

  &:checked + label:before,
  &:not(:checked) + label:before {
    content: "";
    position: absolute;
    top: ${(props) => (props.height - 18) / 2 - 1}px;
    right: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 50%;
    background-color: #ffffff;
  }

  &:checked + label:after,
  &:not(:checked) + label:after {
    content: "";
    width: 12px;
    height: 12px;
    background-color: #000000;
    position: absolute;
    top: ${(props) => (props.height - 18) / 2 + 3}px;
    right: 4px;
    border-radius: 50%;
    transition: all 0.7s ease;
  }

  &:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }

  &:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
`;
