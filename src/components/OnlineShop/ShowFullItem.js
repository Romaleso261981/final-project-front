import React from "react";

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
        <div>Photo</div>
        <h2>Title</h2>
        <p>description</p>
        <b>Cost $</b>
        <div className="add-to-cart" onClick={onShowItem}>
          +
        </div>
      </div>
    </div>
  );
};

export default ShowFullItem;
