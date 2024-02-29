import styled from "styled-components";
import colors from "../../utils/style/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const StyledDropdown = styled.div`
  background-color: ${colors.cards_background};

  width: 100%;
`;

const StyledDiv = styled.div`
  background-color: ${colors.primary};
  color: ${colors.background};
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 700;
  padding: 10px 20px 8px 15px;
  position: relative;
  @media (max-width: 800px) {
    font-size: 13px;
    padding: 0px;
  }
`;

const StyledTitle = styled.p`
  margin: 0;
  @media (max-width: 800px) {
    padding: 7px 10px;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${colors.background};
  height: 32px;
  cursor: pointer;
  transition-property: transform;
  transition-duration: 400ms;
  transform: rotate(${({ rotate }) => rotate});
  @media (max-width: 800px) {
    margin: 0 10px 0 0;
    height: 30px;
  }
`;

const StyledParagraphDiv = styled.ul`
  color: ${colors.secondary};
  font-size: 18px;
  line-height: 142%;
  position: relative;
  transition: all 330ms ease-in-out;
  max-height: ${({ open }) => (open ? "400px" : "0px")};
  font-weight: 400;
  overflow: hidden;
  clip-path: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  padding: ${({ open }) => (open ? "16px 20px 20px 20px" : "0px")};
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

const StyledDescription = styled.li`
  transition: all 330ms ease-in-out;
  transform: translateY(${({ open }) => (open ? "0" : "-150px")});
`;

function Dropdown({ title, description }) {
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState("0");

  const isArray = Array.isArray(description);

  return (
    <StyledDropdown>
      <StyledDiv>
        <StyledTitle>{title}</StyledTitle>
        <StyledIcon
          icon={faAngleUp}
          onClick={() => handleClick(open)}
          rotate={rotate}
        />
      </StyledDiv>
      <StyledParagraphDiv open={open}>
        {isArray ? (
          description.map((singleDescription) => (
            <StyledDescription open={open} key={singleDescription}>
              {singleDescription}
            </StyledDescription>
          ))
        ) : (
          <StyledDescription open={open}>{description}</StyledDescription>
        )}
      </StyledParagraphDiv>
    </StyledDropdown>
  );

  function handleClick() {
    if (open === true) {
      setOpen(false);
      setRotate("0deg");
    } else {
      setOpen(true);
      setRotate("180deg");
    }
  }
}

export default Dropdown;
