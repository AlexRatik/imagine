import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { NavList } from "../navList/navList";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ChatIcon } from "../chatIcon";
import { ReactComponent as SettingsIcon } from "../../assets/settings.svg";
import { ReactComponent as UserIcon } from "../../assets/userpic.svg";
import { Translator } from "../translator";

const StyledHeader = styled.header`
  padding: 0 255px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
  min-height: 112px;
  box-shadow: 0 10px 30px 4px rgba(85, 105, 135, 0.03);
  @media (max-width: 1400px) {
    padding: 32px 125.5px;
    justify-content: space-around;
  }
  @media (max-width: 400px) {
    padding: 15px 5px;
  }
`;

const icons = [
  <HomeIcon />,
  <ChatIcon />,
  <SettingsIcon />,
  <UserIcon />,
  <Translator />,
];

export function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavList values={icons} width={312} />
    </StyledHeader>
  );
}
