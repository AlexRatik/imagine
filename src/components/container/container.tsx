import { ReactNode } from "react";
import styled from "styled-components";

const StyledContainer = styled.div<IContainerProps>`
  max-width: ${(props) => props.width}px;
  margin-top: ${(props) => props.marginTop || 0}px;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

interface IContainerProps {
  width: number;
  marginTop?: number;
  marginBottom?: number;
  children: ReactNode;
}

export function Container(props: IContainerProps) {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
}
