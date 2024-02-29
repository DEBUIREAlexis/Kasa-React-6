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
  @media (max-width: 800px) {
    font-size: 96px;
    margin: 86px 0 113px 0;
  }
`;

const StyledSubTitle = styled.h2`
  color: ${colors.primary};
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  @media (max-width: 800px) {
    font-size: 18px;
    width: 260px;
    text-align: center;
    margin: 0;
  }
`;

const StyledLink = styled(Link)`
  color: ${colors.secondary};
  font-size: 18px;
  text-decoration: underline;
  margin: 139px 0;
  @media (max-width: 800px) {
    margin: 113px 0;
    font-size: 14px;
  }
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
