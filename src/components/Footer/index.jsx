import styled from "styled-components";
import LogoMono from "../../assets/logo_monochrom.svg";
import colors from "../../utils/style/colors.jsx";

const StyledFooter = styled.footer`
  background-color: ${colors.secondary};
  color: ${colors.background};
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  height: 209px;
`;

const StyledLogo = styled.img`
  width: 122px;
  margin: 66px 0 0 0;
`;

const StyledText = styled.p`
  margin: 0 0 29px 0;
  font-size: 24px;
  line-height: 34px;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledLogo src={LogoMono} alt="Logo Kasa en blanc" />
      <StyledText>© 2024 Kasa - All right reserved</StyledText>
    </StyledFooter>
  );
}

export default Footer;
