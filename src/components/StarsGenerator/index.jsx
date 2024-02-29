import styled from "styled-components";
import SingleStar from "../SingleStar";
import colors from "../../utils/style/colors";

const StyledStarDiv = styled.div`
  width: 184px;
  padding: 0 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .stars {
    height: 25px;
  }
  .star-active {
    color: ${colors.primary};
  }
  .star-inactive {
    color: ${colors.stars_empty};
  }

  @media (max-width: 800px) {
    width: 98px;
    .stars {
      height: 14px;
    }
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
        <SingleStar star={star} key={"starNumber" + j++} className="stars" />
      ))}
    </StyledStarDiv>
  );
}

export default StarsGenerator;
