import { NavLink } from "react-router-dom";
import styled from "styled-components";

import colors from "../../utils/style/colors.jsx";

const StyledNavLink = styled(NavLink)`
  color: ${colors.secondary};
  display: inline-flex;
  align-items: center;
  padding: 0 0 0 56px;
  font-size: 24px;
  text-decoration: none;
  ${(props) => props.$isActive && `text-decoration: underline;`}
  @media (max-width: 800px) {
    font-size: 12px;
    text-transform: uppercase;
    padding: 0 0 0 26px;
  }
`;

function NavigationLink({ to, title }) {
  return (
    <StyledNavLink
      to={to}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {title}
    </StyledNavLink>
  );
}

export default NavigationLink;

//onClick={() => isActualLink("/")}
