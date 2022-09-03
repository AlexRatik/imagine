import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { NavList } from "./navList/navList";

const StyledHeader = styled.header`
  padding: 0 255px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 112px;
  box-shadow: 0 10px 30px 4px rgba(85, 105, 135, 0.03);
`;

export function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavList />
    </StyledHeader>
  );
}
