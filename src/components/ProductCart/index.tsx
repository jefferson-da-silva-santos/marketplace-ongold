import React from "react";

const ProductCart = ({formatCurrencyBRL, product, productsCart, setProductsCart, changeMessage}) => {

  // Função responsável por remover um item do carrinho de compras
   const removeProductCart = (e) => {
    e.preventDefault();
    const newProducts = productsCart.filter((productCart) => productCart.id !== product.id);
    setProductsCart(newProducts);
    changeMessage("Produto removido do carrinho", "rgb(255, 63, 63)");
   }

  return (
    <div key={product.id} className="card-itens-payment__content__product">
    <div className="card-itens-payment__content__product__img">
      <img
        className="card-itens-payment__content__product__img__img"
        src={product.srcImg}
      />
    </div>
    <div className="card-itens-payment__content__product__info">
      <div>
        <h3 className="card-itens-payment__content__product__info__title">
          {product.name} - ({product.quantity} X)
        </h3>
        <p className="card-itens-payment__content__product__info__desc">
          {product.description}
        </p>
      </div>
      <div className="group-price">
        <button className="group-price__btn-rm" onClick={removeProductCart}>Remover</button>
        <p className="group-price__price">R$ {formatCurrencyBRL(Number(Number(product.websitePrice).toFixed(2)))}</p>
      </div>
    </div>
  </div>
  );
};

export default ProductCart;
