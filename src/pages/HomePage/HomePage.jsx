import { Container } from "./HomePage.stuled";

import FlowersList from "../../components/FlowersList/FlowersList";
import Background from "../../components/ImgBackground/Background";
import Categories from "../../components/OnlineShop/Categories";
import ShowFullItem from "../../components/OnlineShop/ShowFullItem";
import FlowersItem from "../../data/Flowers2.json";
import { useState } from "react";

export const categories = [
  {
    key: "all",
    name: "Всі",
  },
  {
    key: "Shrubs",
    name: "Кущі",
  },
  {
    key: "Container Plants",
    name: "Контейнерні рослини",
  },
  {
    key: "Herbaceous Perennials",
    name: "Трав'янисті багаторічники",
  },
  {
    key: "Cacti & Succulents",
    name: "Кактуси та сукуленти",
  },
  {
    key: "rouse",
    name: "Рози",
  },
];

export const HomePage = () => {
  const [showFullItem, setIsShowFullItem] = useState(false);
  const [filterItem, setIsFilterItem] = useState([]);
  const [FullItem, setIsFullItem] = useState({});

  function chooseCategory(category) {
    if (category === "all") {
      setIsFilterItem(FlowersItem);
      return;
    }
    const fiteredItem = FlowersItem.filter((el) => el.category === category);
    setIsFilterItem(fiteredItem);
  }

  function onShowItem(e) {
    setIsFullItem(FlowersItem.filter((el) => el.productId === e.id));

    setIsShowFullItem(!showFullItem);
  }

  return (
    <Background>
      <Container>
        <Categories chooseCategory={chooseCategory} categories={categories} />
        <FlowersList flowers={filterItem} onShowItem={onShowItem} />
        {showFullItem && (
          <ShowFullItem onShowItem={onShowItem} FullItem={FullItem} />
        )}
      </Container>
    </Background>
  );
};

export default HomePage;
