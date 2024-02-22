import styled from "styled-components";
import SingleStar from "../SingleStar";
import colors from "../../utils/style/colors";

const StyledStarDiv = styled.div`
  .star-active {
    color: ${colors.primary};
  }
  .star-inactive {
    color: ${colors.stars_empty};
  }
`;

function StarsGenerator(rating) {
  let starArray = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating.rating) {
      starArray.push(true);
    } else {
      starArray.push(false);
    }
  }
  let j = 0;
  return (
    <StyledStarDiv>
      {starArray.map((star) => (
        <SingleStar star={star} key={"starNumber" + j++} />
      ))}
    </StyledStarDiv>
  );
}

export default StarsGenerator;
