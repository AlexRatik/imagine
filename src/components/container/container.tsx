import { ReactNode } from "react";
import styled from "styled-components";

const StyledContainer = styled.div<IContainerProps>`
  max-width: ${(props) => props.width}px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

interface IContainerProps {
  width: number;
  children: ReactNode;
}

export function Container(props: IContainerProps) {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
}
