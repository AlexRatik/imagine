import styled from "styled-components";

interface IInputProps {
  height: number;
  placeholder: string;
  backgroundColor: string;
  isShow: boolean;
}

const StyledInput = styled.input<IInputProps>`
  width: 100%;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.backgroundColor};
  outline: none;
  border: none;
  font-size: 1rem;
  padding-left: 20px;
  transition: all 0.35s ease-in-out;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transform: ${(props) =>
    props.isShow ? "translateY(0)" : "translateY(-100%)"};
  pointer-events: ${(props) => (props.isShow ? "all" : "none")};

  &::placeholder {
    font-size: 1rem;
  }
`;

export function Input(props: IInputProps) {
  return <StyledInput {...props} />;
}
