import styled from "styled-components";
import BackgroundImg from "../../assets/background_img_2.png";
import colors from "../../utils/style/colors";
import Dropdown from "../../components/Dropdown";

const StyledMain = styled.main`
  margin: 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    margin: 0 20px;
  }
`;

const StyledBanner = styled.img`
  height: 223px;
  width: 100%;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  background-color: ${colors.secondary};
  border-radius: 25px;
  @media (max-width: 800px) {
    height: 111px;
  }
`;

const StyledDropdownWrap = styled.div`
  width: 82.5%;
  margin: 19px 0 38px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 800px) {
    width: 100%;
    gap: 20px;
    margin: 19px 0;
  }
`;

function About() {
  return (
    <StyledMain>
      <StyledBanner />
      <StyledDropdownWrap>
        <Dropdown
          title="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Dropdown
          title="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          title="Service"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          title="Sécurité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </StyledDropdownWrap>
    </StyledMain>
  );
}

export default About;
