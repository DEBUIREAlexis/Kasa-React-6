import styled from "styled-components";
import colors from "../../utils/style/colors";

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
`;

const StyledTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.background};
  width: 40%;
  margin: 20px;
`;

function Card({ id, title, cover }) {
  return (
    <StyledDiv key={id} style={{ backgroundImage: `url(${cover})` }}>
      <StyledTitle>{title}</StyledTitle>
    </StyledDiv>
  );
}

export default Card;
