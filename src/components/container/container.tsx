import { ReactNode } from "react";
import styled from "styled-components";

const StyledContainer = styled.div<IContainerProps>`
  max-width: ${(props) => props.width}px;
  margin: ${(props) => props.marginTop || 0}px 0
    ${(props) => props.marginBottom || 0}px;
  gap: ${(props) => props.gap || 0}px;
  display: flex;
  justify-content: space-between;
  transition: all 0.35s ease-in-out;

  @media (max-width: 1240px) {
    margin: ${(props) => (props.marginTop ? props.marginTop / 2 : 0)}px 0
      ${(props) => (props.marginBottom ? props.marginBottom / 2 : 0)}px;

    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  @media (max-width: 1240px) {
    margin: ${(props) => (props.marginTop ? props.marginTop / 4 : 0)}px 0
      ${(props) => (props.marginBottom ? props.marginBottom / 4 : 0)}px;
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

interface IContainerProps {
  width: number;
  marginTop?: number;
  marginBottom?: number;
  gap?: number;
  children: ReactNode;
}

export function Container(props: IContainerProps) {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
}
