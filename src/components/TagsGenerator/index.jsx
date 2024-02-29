import IndividualTag from "../IndividualTag";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  gap: 10px;
`;

function TagsGenerator(tags) {
  return (
    <StyledUl>
      {tags.tags.map((tag) => (
        <IndividualTag tag={tag} key={tag} />
      ))}
    </StyledUl>
  );
}
export default TagsGenerator;
