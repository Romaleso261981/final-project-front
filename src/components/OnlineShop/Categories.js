import React from "react";


export function Categories({ chooseCategory, categories }) {
  return (
    <>
      <div className="categories">
        {categories.map((el) => (
          <div key={el.key} onClick={() => chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    </>
  );
}
export default Categories;
