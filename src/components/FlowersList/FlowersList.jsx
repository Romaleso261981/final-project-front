import {  ListWrapper } from "./FlowersList.styled";

import FlowersItem from "./FlowersItem";

const FlowersList = ({ flowers, onShowItem }) => {
  return (
    <ListWrapper>
      {flowers.map(
        ({
          category,
          instructions,
          name,
          photo,
          price,
          productId,
        }) => (
          <FlowersItem
            onShowItem={onShowItem}
            key={productId}
            id={productId}
            category={category}
            name={name}
            photo={photo}
            price={price}
            instructions={instructions}
          />
        )
      )}
    </ListWrapper>
  );
};

export default FlowersList;
