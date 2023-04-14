import React from "react";

export const categories = [
  {
    key: "all",
    name: "Всё",
  },
  {
    key: "chairs",
    name: "Стулья",
  },
  {
    key: "tables",
    name: "Столы",
  },
  {
    key: "sofa",
    name: "Диваны",
  },
  {
    key: "light",
    name: "Свет",
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
