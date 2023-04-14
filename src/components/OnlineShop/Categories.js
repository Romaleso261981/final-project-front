import React from "react";

export const categories = [
  {
    key: "all",
    name: "Всё",
  },
  {
    key: "Rose",
    name: "Букети з роз",
  },
  {
    key: "tables",
    name: "Лілії",
  },
  {
    key: "sofa",
    name: "Букеты тюльпанов и ирисов",
  },
  {
    key: "light",
    name: "Сборные букеты",
  },
];

export function Categories() {
  return (
    <>
      <div className="categories">
        {categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    </>
  );
}
export default Categories;
