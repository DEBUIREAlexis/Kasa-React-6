import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavigationLink from "../NavigationLink/index.jsx";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 45px 100px 50px 100px;
`;

const StyledLogo = styled.img`
  width: 210px;
`;

const StyledNav = styled.nav`
  .active {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <StyledLogo src={Logo} alt="Logo" />
      <StyledNav>
        <NavigationLink to="/" title="Accueil"></NavigationLink>
        <NavigationLink to="/about" title="A propos"></NavigationLink>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
