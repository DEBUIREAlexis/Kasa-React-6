import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../utils/style/colors.jsx";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const StyledTitle = styled.h1`
  color: ${colors.primary};
  font-size: 288px;
  font-weight: 700;
  margin: 139px 0;
`;

const StyledSubTitle = styled.h2`
  color: ${colors.primary};
  font-size: 36px;
`;

const StyledLink = styled(Link)`
color: ${colors.secondary}
  font-size: 18px;
  text-decoration: underline;
  margin: 139px 0;
`;

function Error() {
  return (
    <StyledDiv>
      <StyledTitle>404</StyledTitle>
      <StyledSubTitle>
        Oups! La page que vous demandez n'existe pas.
      </StyledSubTitle>
      <StyledLink to="/">Retourner sur la page d'acceuil</StyledLink>
    </StyledDiv>
  );
}

export default Error;
