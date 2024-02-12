import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import colors from "../../utils/style/colors.jsx";

const StyledLink = styled(Link)`
  color: ${colors.secondary};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  padding: 0 28px;
  font-size: 24px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 45px 100px 50px 100px;
`;

const StyledLogo = styled.img`
  width: 210px;
`;

const StyledNav = styled.nav``;

function Header() {
  return (
    <StyledHeader>
      <StyledLogo src={Logo} alt="Logo" />
      <StyledNav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
