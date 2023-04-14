import { Container } from "./HomePage.stuled";

import FlowersList from "../../components/FlowersList/FlowersList";
import Background from "../../components/ImgBackground/Background";
import Categories from "../../components/OnlineShop/Categories";
import ShowFullItem from "../../components/OnlineShop/ShowFullItem";
import FlowersItem from "../../data/flowers.json";
import { useState } from "react";

export const HomePage = () => {
  const [showFullItem, setIsShowFullItem] = useState(false);

  function onShowItem() {
  setIsShowFullItem(!showFullItem);
  }

  return (
    <Background>
      <Container>
        <Categories />
        <FlowersList flowers={FlowersItem} onShowItem={onShowItem} />
      </Container>
      {showFullItem && (
        <ShowFullItem onShowItem={onShowItem} />
      )}
    </Background>
  );
};

export default HomePage;
