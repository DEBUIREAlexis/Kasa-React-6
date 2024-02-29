import styled from "styled-components";
import colors from "../../utils/style/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const StyledCarousel = styled.div`
  height: 415px;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-position: center;
  p {
    color: ${colors.background};
    align-self: end;
  }
  .not-display-arrow {
    display: none;
  }
  .not-display-number {
    display: none;
  }
  @media (max-width: 800px) {
    height: 255px;
    border-radius: 10px;
    p {
      display: none;
    }
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${colors.background};
  height: 96px;
  cursor: pointer;
  transition-property: transform;
  transition-duration: 400ms;
  transform: rotate(${({ rotate }) => rotate});
  margin: 0 30px;
  @media (max-width: 800px) {
    height: 24px;
    margin: 10px;
  }
`;

function Slideshow(pictures) {
  const [currentImg, setCurrentImg] = useState(0);
  let moreThanOneImage = "not-display-arrow";
  let notDisplayNumber = "not-display-number";
  if (pictures.picture.length > 1) {
    moreThanOneImage = "display-arrow";
    notDisplayNumber = "display-number";
  }
  return (
    <StyledCarousel
      style={{ backgroundImage: `url(${pictures.picture[currentImg]})` }}
    >
      <StyledIcon
        icon={faChevronLeft}
        onClick={() => checkOutOfBound(-1)}
        className={moreThanOneImage}
      />
      <p className={notDisplayNumber}>
        {currentImg + 1}/{pictures.picture.length}
      </p>
      <StyledIcon
        icon={faChevronRight}
        onClick={() => checkOutOfBound(+1)}
        className={moreThanOneImage}
      />
    </StyledCarousel>
  );
  function checkOutOfBound(changeValue) {
    if (changeValue > 0) {
      if (changeValue + currentImg > pictures.picture.length - 1) {
        setCurrentImg(0);
      } else {
        setCurrentImg(changeValue + currentImg);
      }
    } else {
      if (changeValue + currentImg < 0) {
        setCurrentImg(pictures.picture.length - 1);
      } else {
        setCurrentImg(currentImg + changeValue);
      }
    }
  }
}

export default Slideshow;
