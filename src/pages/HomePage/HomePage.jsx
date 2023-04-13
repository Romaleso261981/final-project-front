import { Container } from "./HomePage.stuled";

import { AuthPageLogo } from "../../components/AuthPageLogo/AuthPageLogo";
import FlowersList from "../../components/FlowersList/FlowersList";
import Background from "../../components/ImgBackground/Background";
import FlowersItem from "../../data/flowers.json";



export const HomePage = () => {
  return (
    <Background>
      <Container>
        <AuthPageLogo />
        <FlowersList flowers={FlowersItem} />
      </Container>
    </Background>
  );
};

export default HomePage;
