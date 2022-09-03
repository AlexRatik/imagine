import { ReactNode } from "react";
import styled from "styled-components";

interface INavItem {
  children: ReactNode;
}

const StyledNavItem = styled.li`
  display: inline;
  &,
  svg path {
    transition: all 0.15s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transform: scale(1.1);
    svg path {
      fill: blue;
    }
  }
`;

export function NavItem({ children }: INavItem) {
  return <StyledNavItem>{children}</StyledNavItem>;
}
