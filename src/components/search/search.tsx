import { InputTitle } from "../inputTitle/inputTitle";
import { Input } from "../input/input";
import { useState } from "react";
import styled from "styled-components";

interface ISearchProps {
  height: number;
  width: number;
  title: string;
  inputHeight: number;
}

const StyledSearch = styled.div<Partial<ISearchProps>>`
  z-index: 1;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  @media (max-width: 1240px) {
    width: 80%;
  }
`;

export function Search({ title, height, width, inputHeight }: ISearchProps) {
  const [showInput, setShowInput] = useState<boolean>(false);

  return (
    <StyledSearch width={width} height={height}>
      <InputTitle
        onClick={() => setShowInput((prev) => !prev)}
        height={height}
        text={title}
        rotated={showInput}
      />
      <Input
        height={inputHeight}
        placeholder="Start type a name"
        backgroundColor="#F6F6F6"
        isShow={showInput}
      />
    </StyledSearch>
  );
}
