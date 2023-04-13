import { Container, ContentWrapper } from "./HomePage.stuled";

import { AuthPageLogo } from "../../components/AuthPageLogo/AuthPageLogo";
import FlowersList from "../../components/FlowersList/FlowersList";
import FlowersItem from "../../data/flowers.json";



export const HomePage = () => {
  return (
    <Container>
      <ContentWrapper>
        <AuthPageLogo />
        <FlowersList flowers={FlowersItem} />
      </ContentWrapper>
    </Container>
  );
};

export default HomePage;
