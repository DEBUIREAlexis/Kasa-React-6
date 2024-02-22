import styled from "styled-components";
import colors from "../../utils/style/colors";

const StyledLi = styled.li`
  list-style: none;

  width: 115px;
  color: ${colors.background};
  background-color: ${colors.primary};
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  padding: 4px 0 5px 0;
  margin: 0 10px 0 0;
`;

function IndividualTag({ tag }) {
  return <StyledLi>{tag}</StyledLi>;
}
export default IndividualTag;
