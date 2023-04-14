import React from "react";

const title = "Букет 25 белых тюльпанов";
const url = "https://flowers.ua/images/Flowers/2635.jpg";
const description =
  "Нежная охапка белых весенних тюльпанов не оставит равнодушной ни одну представительницу прекрасного пола! Состав: 25 белых тюльпанов, оформление.";
const date = "25.06.2022";
const id = "1";

export const ShowFullItem = ({ onShowItem }) => {
  return (
    <div className="full-item">
      <div>
        {/* <img
          src={"./img/" + item.img}
          onClick={() => this.props.onShowItem(item)}
        />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}$</b>
        <div className="add-to-cart" onClick={onShowItem}>
          +
        </div> */}
        <img src={url} className="item img" />
        <h2>{title}</h2>
        <p>{description}</p>
        <b>{date} $</b>
        <div className="add-to-cart" onClick={onShowItem}>
          +
        </div>
      </div>
    </div>
  );
};

export default ShowFullItem;
