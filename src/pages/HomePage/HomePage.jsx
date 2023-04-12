import { Container, ContentWrapper } from "./HomePage.stuled";

import { AuthPageLogo } from "../../components/AuthPageLogo/AuthPageLogo";

export const HomePage = () => {
  return (
    <Container>
      <ContentWrapper>
        <AuthPageLogo />
      </ContentWrapper>
    </Container>
  );
};

export default HomePage;
