import styled from "styled-components";
import colors from "../../utils/style/colors";

const StyledLi = styled.li`
  list-style: none;

  min-width: 107px;
  color: ${colors.background};
  background-color: ${colors.primary};
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  padding: 4px 4px 5px 4px;
  border-radius: 10px;
  @media (max-width: 800px) {
    font-size: 10px;
    min-width: 84px;
    border-radius: 5px;
  }
`;

function IndividualTag({ tag }) {
  return <StyledLi>{tag}</StyledLi>;
}
export default IndividualTag;
