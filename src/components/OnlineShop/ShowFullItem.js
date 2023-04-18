import React from "react";

const title = "Букет 25 белых тюльпанов";
const url = "https://flowers.ua/images/Flowers/2635.jpg";
const description =
  "Нежная охапка белых весенних тюльпанов не оставит равнодушной ни одну представительницу прекрасного пола! Состав: 25 белых тюльпанов, оформление.";
const date = "25.06.2022";
const id = "1";

export const ShowFullItem = ({ onShowItem, FullItem }) => {
  console.log(FullItem[0]);
  const { category, instructions, name, photo, price, productId } = FullItem[0];
    console.log(FullItem);
  return (
    <div className="full-item">
      <div>
        <img src={photo} className="item img" />
        <h2>{name}</h2>
        <h2>{category}</h2>
        <p>{instructions}</p>
        <b>{price} $</b>
        <div className="add-to-cart" onClick={onShowItem}>
          close
        </div>
      </div>
    </div>
  );
};

export default ShowFullItem;
