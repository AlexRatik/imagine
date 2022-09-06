import styled from "styled-components";
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";
import { ReactComponent as WhatsAppIcon } from "../../assets/whatsApp.svg";
import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";
import { ReactComponent as Logo } from "../../assets/logoLight.svg";
import { NavList } from "../navList/navList";

const StyledFooter = styled.footer`
  flex-shrink: 0;
  position: relative;
  padding: 50px 255px 66px;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  @media (max-width: 1400px) {
    padding: 25px 125.5px 33px;
    justify-content: space-around;
  }
`;

const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 150%;

  &:first-child {
    flex-basis: 63.5%;
    @media (max-width: 1400px) {
      flex-basis: 50%;
    }
  }

  .logo {
    margin-bottom: 3.75rem;
  }

  p,
  a {
    line-height: 150%;
  }

  p:last-child,
  a:nth-child(2) {
    display: block;
    margin-top: 1rem;
  }

  blockquote {
    font-size: 0.875rem;
    margin-top: 4rem;
  }

  ul {
    margin-top: 2.5rem;
    li:hover {
      svg path {
        fill: lightgray;
      }
    }
  }

  @media (max-width: 740px) {
    flex-basis: 100%;
    a,
    p {
      text-align: center;
    }
    .logo {
      margin: 1rem auto;
    }
    blockquote {
      margin: 1rem auto;
    }
    ul {
      margin-top: 1rem;
    }
  }
  @media (max-width: 400px) {
    padding: 10px 15px;
  }
`;

const socialIcons = [<FacebookIcon />, <InstagramIcon />, <WhatsAppIcon />];

export function Footer() {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <Logo className="logo" />
        <p>Contract offer</p>
        <p>Card payment rules</p>
      </StyledFooterContainer>
      <StyledFooterContainer>
        <a href="https://imagine.com/">imagine.com</a>
        <a href="mailto:info@imagine.com">info@imagine.com</a>
        <blockquote>© IMAGINE 2021. All rights Reserved</blockquote>
      </StyledFooterContainer>
      <StyledFooterContainer>
        <NavList values={socialIcons} width={100} />
      </StyledFooterContainer>
    </StyledFooter>
  );
}
