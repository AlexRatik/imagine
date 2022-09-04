import { v4 as uuidv4 } from "uuid";
import { NavItem } from "./navItem";
import styled from "styled-components";
import { ReactElement } from "react";

const StyledNavList = styled.ul<{ width: number }>`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  min-width: ${(props) => props.width || 200}px;
`;

export function NavList({
  values,
  width,
}: {
  width: number;
  values: ReactElement[];
}) {
  return (
    <StyledNavList width={width}>
      {values.map((value) => (
        <NavItem key={uuidv4()}>{value}</NavItem>
      ))}
    </StyledNavList>
  );
}
