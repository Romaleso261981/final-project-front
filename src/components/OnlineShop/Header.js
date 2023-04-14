import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = ({ categories, onDelete }) => {
  let summa = 0;
  categories.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <div>
      {categories.map((el) => (
        <Order onDelete={onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">Сумма: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товаров нет</h2>
    </div>
  );
};

 
  export function Header({ categories }) {
    let [cartOpen, setCartOpen] = useState(false);

    return (
      <>
        <header className="shopHeader">
          <div>
            <span className="logo">House Staff</span>
            <ul className="nav">
              <li>Про нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
            </ul>
            <FaShoppingCart
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
              className={`shop-cart-button ${cartOpen && "active"}`}
            />

            {cartOpen && (
              <div className="shop-cart">
                {orders.length > 0
                  ? showOrders({ categories, onDelete })
                  : showNothing()}
              </div>
            )}
          </div>
          <div className="presentation"></div>
        </header>
      </>
    );
  }
export default Header;
