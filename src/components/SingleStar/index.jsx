import star_active from "../../assets/star_active.svg";
import star_inactive from "../../assets/star_inactive.svg";
import styled from "styled-components";

const StyledImg = styled.img`
  height: 25px;
  @media (max-width: 800px) {
    height: 14px;
  }
`;

function SingleStar(active) {
  if (active.star) {
    return <StyledImg src={star_active} alt="star"></StyledImg>;
  } else return <StyledImg src={star_inactive} alt="star"></StyledImg>;
}

export default SingleStar;
