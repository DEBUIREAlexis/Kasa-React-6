import IndividualTag from "../IndividualTag";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  flex-flow: row;
  padding: 0;
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
