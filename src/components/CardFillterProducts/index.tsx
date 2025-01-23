import React, { useState } from "react";

const CardFillterProducts = ({ arrCategory }) => {
  const [currentCateory, setCurrentCategory] = useState(
    "Todas as categorias de produtos"
  );

  return (
    <div className="card-fillter-products">
      <span className="currentFilter">
        <i className="bi bi-caret-right"></i>
        {currentCateory}
      </span>
      <select
        onChange={(e) => {
          if (e.target.value === "Todas") {
            setCurrentCategory("Todas as categorias de produtos");
          } else {
            setCurrentCategory(`Itens da categoria ${e.target.value}`);
          }
        }}
        className="selectCategory"
        name=""
        id=""
      >
        {arrCategory.map((item, i) => {
          return (
            <option className="option-category" key={i} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CardFillterProducts;
