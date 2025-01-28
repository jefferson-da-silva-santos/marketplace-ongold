import React, { useEffect, useState } from "react";

const CardFillterProducts = ({ arrCategory, filterArrProducts, setProducts, productsArr, currentPage, searchProducts }) => {

  const [currentCategory, setCurrentCategory] = useState(
    "Todas as categorias de produtos"
  );

  useEffect(()=> {
    searchProducts(currentCategory)
  }, [currentPage]);
  
  return (
    <div className="card-fillter-products">
      <span className="currentFilter">
        {currentCategory}
      </span>
      <select
        onChange={(e) => {
          if (e.target.value === "Todas") {
            setCurrentCategory("Todas as categorias de produtos");
            setProducts(productsArr);
          } else {
            setCurrentCategory(`Itens da categoria ${e.target.value}`);
            setProducts(filterArrProducts(e.target.value));
          }
          currentPage(0);
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
