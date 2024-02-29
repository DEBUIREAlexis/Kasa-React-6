import styled from "styled-components";
import BackgroundImg from "../../assets/background_img_1.png";
import colors from "../../utils/style/colors";
import Card from "../../components/Card";
import data from "../../utils/data/data.json";

const StyledMain = styled.main`
  margin: 0 100px;
  @media (max-width: 600px) {
    margin: 0 20px;
  }
`;

const StyledTitle = styled.div`
  height: 223px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  color: ${colors.background};
  background-color: ${colors.secondary};
  border: solid 1px ${colors.secondary};
  border-radius: 25px;
  text-align: center;
  line-height: 223px;
  filter: drop-shadow(0 4px 2px rgba(0, 0, 0, 0.35));
  h1 {
    margin: 0;
    font-size: 48px;
  }

  @media (max-width: 1100px) {
    display: flex;
    align-items: center;
    height: 111px;
    border-radius: 10px;

    h1 {
      line-height: 100%;
      text-align: left;
      font-size: 24px;
      width: 225px;
      margin: 0 0 0 16px;
    }
  }
`;

const StyledSection = styled.section`
  background-color: ${colors.cards_background};
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 43px 0 50px 0;
  padding: 31px 0 18px 0;
  @media (max-width: 800px) {
    background-color: ${colors.background};
    margin: 22px 0 27px 0;
    padding: 0;
    width: 100%;
    gap: 20px;
  }
`;

const StyledCard = styled(Card)``;
function Home() {
  return (
    <StyledMain>
      <StyledTitle>
        <h1>Chez vous, partout et ailleurs</h1>
      </StyledTitle>
      <StyledSection>
        {data.map(({ id, title, cover }) => (
          <StyledCard key={id} id={id} title={title} cover={cover} />
        ))}
      </StyledSection>
    </StyledMain>
  );
}

export default Home;
