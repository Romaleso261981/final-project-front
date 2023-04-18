import React from "react";


export const ShowFullItem = ({ onShowItem, FullItem }) => {
  const { category, instructions, name, photo, price, productId } = FullItem[0];
  return (
    <div className="full-item" onClick={onShowItem}>
      <div>
        <img src={photo} className="item img" />
        <h1>{name}</h1>
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
