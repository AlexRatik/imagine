import { v4 as uuidv4 } from "uuid";
import { ReactComponent as SettingsIcon } from "../../assets/settings.svg";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as UserIcon } from "../../assets/userpic.svg";
import { NavItem } from "./navItem";
import styled from "styled-components";
import { Translator } from "../translator";
import { ChatIcon } from "../chatIcon";

const icons = [
  <HomeIcon />,
  <ChatIcon />,
  <SettingsIcon />,
  <UserIcon />,
  <Translator />,
];

const StyledNavList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  min-width: 312px;
`;

export function NavList() {
  return (
    <StyledNavList>
      {icons.map((icon) => (
        <NavItem key={uuidv4()}>{icon}</NavItem>
      ))}
    </StyledNavList>
  );
}
