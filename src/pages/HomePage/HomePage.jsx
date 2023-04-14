import { Container } from "./HomePage.stuled";

import FlowersList from "../../components/FlowersList/FlowersList";
import Background from "../../components/ImgBackground/Background";
import Categories from "../../components/OnlineShop/Categories";
import ShowFullItem from "../../components/OnlineShop/ShowFullItem";
import FlowersItem from "../../data/flowers.json";
import { useState } from "react";

export const HomePage = () => {
  const [showFullItem, setIsShowFullItem] = useState(false);
  const [FullItem, setFullItem] = useState({});

  function onShowItem() {
  setIsShowFullItem(!showFullItem);
  //   console.log(e.target);
  //   // FlowersItem.forEach((el) => {
  //   //   if (el._id === id) {
  //   //     console.log(el);
  //   //   }
  //   // });
  }

  return (
    <Background>
      <Container>
        <Categories />
        <FlowersList flowers={FlowersItem} onShowItem={onShowItem} />
      </Container>
      {showFullItem && (
        <ShowFullItem onShowItem={onShowItem} FullItem={FullItem} />
      )}
    </Background>
  );
};

export default HomePage;
