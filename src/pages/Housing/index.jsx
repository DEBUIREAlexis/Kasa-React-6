import styled from "styled-components";
import BackgroundImg from "../../assets/background_img_1.png";
import colors from "../../utils/style/colors";
import data from "../../utils/data/data.json";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import TagsGenerator from "../../components/TagsGenerator";
import StarsGenerator from "../../components/StarsGenerator";
import Dropdown from "../../components/Dropdown";

const StyledMain = styled.main`
  margin: 0 100px;
`;

const StlyedTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.primary};
`;

const StyledHostWrapper = styled.div`
  display: flex;
`;

const StyledTagStarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

function recoverData(idHousing) {
  let toReturn;
  data.forEach((element) => {
    if (element.id === idHousing) {
      toReturn = element;
    }
  });
  return toReturn;
}

function Housing() {
  const { id } = useParams();
  const actualHousing = recoverData(id);
  return (
    <StyledMain>
      <Slideshow picture={actualHousing.pictures}></Slideshow>
      <StlyedTitleWrapper>
        <div>
          <h1>{actualHousing.title}</h1>
          <h2>{actualHousing.location}</h2>
        </div>
        <StyledHostWrapper>
          <p>{actualHousing.host.name}</p>
          <img src={actualHousing.host.picture} alt="Profile"></img>
        </StyledHostWrapper>
      </StlyedTitleWrapper>
      <StyledTagStarWrapper>
        <TagsGenerator tags={actualHousing.tags} />
        <StarsGenerator rating={actualHousing.rating} />
      </StyledTagStarWrapper>
      <div>
        <Dropdown title="Description" description={actualHousing.description} />
        <Dropdown title="Equipements" description={actualHousing.equipments} />
      </div>
    </StyledMain>
  );
}

export default Housing;
