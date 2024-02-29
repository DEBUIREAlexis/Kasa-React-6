import styled from "styled-components";
import colors from "../../utils/style/colors";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  background-color: ${colors.primary};
  border-radius: 10px;
  height: 340px;
  width: 340px;
  margin: 25px 30px 25px 30px;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  background-size: cover;
  background-position: center;
  @media (max-width: 800px) {
    margin: 0;
    width: 100%;
    height: 255px;
  }
`;

const StyledTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.background};
  width: 40%;
  margin: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

function Card({ id, title, cover }) {
  return (
    <StyledLink to={"/housing/" + id} id={id}>
      <StyledDiv key={id} style={{ backgroundImage: `url(${cover})` }}>
        <StyledTitle>{title}</StyledTitle>
      </StyledDiv>
    </StyledLink>
  );
}

export default Card;
