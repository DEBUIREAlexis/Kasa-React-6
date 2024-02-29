import styled from "styled-components";
import colors from "../../utils/style/colors";
import data from "../../utils/data/data.json";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import TagsGenerator from "../../components/TagsGenerator";
import StarsGenerator from "../../components/StarsGenerator";
import Dropdown from "../../components/Dropdown";

const StyledMain = styled.main`
  margin: 0 100px;
  @media (max-width: 600px) {
    margin: 0 20px;
  }
`;

const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 24px 0;
  @media (max-width: 800px) {
    flex-direction: column;
    margin: 15px 0 0 0;
  }
`;

const StyledTitleTag = styled.div``;

const StyledHostStar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 13px 0;
  @media (max-width: 800px) {
    flex-direction: row-reverse;
    padding: 0;
    margin: 16px 0 0 0;
  }
`;

const StyledHostWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  @media (max-width: 800px) {
    align-items: center;
  }
`;

const StyledTitle = styled.h1`
  color: ${colors.primary};
  font-weight: 500;
  line-height: 142%;
  margin: 6px 0;
  font-size: 36px;
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const StyledLocation = styled.h2`
  color: ${colors.secondary};
  font-weight: 500;
  font-size: 18px;
  margin: 0;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const StyledDropdownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0 50px 0;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
    margin: 13px 0 27px 0;
  }
`;

const StyledProfilePic = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  @media (max-width: 800px) {
    width: 32px;
    height: 32px;
  }
`;

const StyledHostName = styled.p`
  text-align: right;
  color: ${colors.primary};
  font-size: 18px;
  max-width: min-content;
  text-wrap: balance;
  margin: 10px 10px;
  @media (max-width: 800px) {
    font-size: 12px;
    margin: 0;
  }
`;

const StyledSingleDropdown = styled.div`
  width: 47%;
  @media (max-width: 800px) {
    width: 100%;
  }
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
  let error = false;
  const { id } = useParams();
  let actualHousing;
  try {
    actualHousing = recoverData(id);
  } catch (err) {
    error = true;
  }
  if (actualHousing === undefined) {
    error = true;
  }
  console.log(error);

  return (
    <div>
      {error ? (
        <Navigate to="*" replace={false} />
      ) : (
        <StyledMain>
          <Slideshow picture={actualHousing.pictures}></Slideshow>
          <StyledInfo>
            <StyledTitleTag>
              <StyledTitle>{actualHousing.title}</StyledTitle>
              <StyledLocation>{actualHousing.location}</StyledLocation>
              <TagsGenerator tags={actualHousing.tags} />
            </StyledTitleTag>
            <StyledHostStar>
              <StyledHostWrapper>
                <StyledHostName>{actualHousing.host.name}</StyledHostName>
                <StyledProfilePic
                  src={actualHousing.host.picture}
                  alt="Profile"
                ></StyledProfilePic>
              </StyledHostWrapper>
              <StarsGenerator rating={actualHousing.rating} />
            </StyledHostStar>
          </StyledInfo>
          <StyledDropdownWrapper>
            <StyledSingleDropdown>
              <Dropdown
                title="Description"
                description={actualHousing.description}
              />
            </StyledSingleDropdown>
            <StyledSingleDropdown>
              <Dropdown
                title="Equipements"
                description={actualHousing.equipments}
              />
            </StyledSingleDropdown>
          </StyledDropdownWrapper>
        </StyledMain>
      )}
    </div>
  );
}

export default Housing;
