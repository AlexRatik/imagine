import styled from "styled-components";
import { Arrow } from "../arrow";

interface IInputTitleProps {
  onClick: () => void;
  height: number;
  text: string;
  rotated: boolean;
}

const StyledTitleContainer = styled.div<{ height: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.height}px;
  p {
    min-width: 2.5rem;
  }
  &:hover {
    cursor: pointer;
  }
`;

export function InputTitle({
  onClick,
  height,
  text,
  rotated,
}: IInputTitleProps) {
  return (
    <StyledTitleContainer height={height} onClick={onClick}>
      <p>{text}</p>
      <Arrow rotated={rotated} />
    </StyledTitleContainer>
  );
}
