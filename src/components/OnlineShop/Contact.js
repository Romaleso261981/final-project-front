import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const orders = [
  // {
  //   title: "Букет 25 белых тюльпанов",
  //   url: "https://flowers.ua/images/Flowers/2635.jpg",
  //   description:
  //     "Нежная охапка белых весенних тюльпанов не оставит равнодушной ни одну представительницу прекрасного пола! Состав: 25 белых тюльпанов, оформление.",
  //   date: "25.06.2022",
  //   _id: "1",
  // },
  // {
  //   title: "25 Белых розы в корзине",
  //   url: "https://flowers.ua/images/Flowers/thumbnail/1079.jpg",
  //   description:
  //     "Шикарные красные розы - лучший подарок Состав 15 красных роз высота до 60 см оформление",
  //   date: "25.06.2022",
  //   _id: "2",
  // },
];

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

// const showNothing = () => {
//   return (
//     <div className="empty">
//       <h2>Товаров нет</h2>
//     </div>
//   );
// };

 
  export function Contact({ categories, orders }) {
    let [cartOpen, setCartOpen] = useState(false);

    return (
      <>
        <header className="shopHeader">
          <div>
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
export default Contact;
