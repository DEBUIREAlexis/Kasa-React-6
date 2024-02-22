import styled from "styled-components";
import colors from "../../utils/style/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const StyledDropdown = styled.div`
  background-color: ${colors.cards_background};
  margin: 30px 108px;
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
`;

const StyledTitle = styled.p`
  margin: 0;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${colors.background};
  height: 32px;
  cursor: pointer;
  transition-property: transform;
  transition-duration: 400ms;
  transform: rotate(${({ rotate }) => rotate});
`;

const StyledParagraphDiv = styled.ul`
  color: ${colors.secondary};
  font-size: 18px;
  line-height: 142%;
  position: relative;
  transition: all 330ms ease-in-out;
  max-height: ${({ open }) => (open ? "400px" : "0px")};
  overflow: hidden;
  clip-path: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const StyledDescription = styled.li`
  transition: all 330ms ease-in-out;
  transform: translateY(${({ open }) => (open ? "0" : "-150px")});
  margin: 20px 20px;
`;

function Dropdown({ title, description }) {
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState("0");

  if (Array.isArray(description)) {
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
          {description.map((singleDescription) => (
            <StyledDescription open={open} key={singleDescription}>
              {singleDescription}
            </StyledDescription>
          ))}
        </StyledParagraphDiv>
      </StyledDropdown>
    );
  } else {
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
          <StyledDescription open={open}>{description}</StyledDescription>
        </StyledParagraphDiv>
      </StyledDropdown>
    );
  }
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
