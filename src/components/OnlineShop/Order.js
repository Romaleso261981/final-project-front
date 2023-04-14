import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";


export function Order({ item }) {
  return (
    <div className="item">
      <img src={"./img/" + item.img} />
      <h2>{item.title}</h2>
      <p>{item.price}$</p>
      <FaTrash
        className="delete-icon"
        onClick={() => this.props.onDelete(item.id)}
      />
    </div>
  );
}

export default Order;
