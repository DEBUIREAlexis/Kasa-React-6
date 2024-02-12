import { Link } from "react-router-dom";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const StyledLink = styled(Link)`
  height: 40px;
  color: #8186a0;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  padding: 0 25px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const StyledNav = styled.nav``;

function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
