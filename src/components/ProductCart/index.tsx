import React, { useState } from "react";
import productsArr from "../../data/products.json";

const ProductCart = ({
  formatCurrencyBRL,
  product,
  productsCart,
  setProductsCart,
  changeMessage,
}) => {
  const [productCart, setProductCart] = useState(product);

  // Função responsável por remover um item do carrinho de compras
  const removeProductCart = (e) => {
    e.preventDefault();
    const newProducts = productsCart.filter(
      (productCart) => productCart.id !== product.id
    );
    setProductsCart(newProducts);
    changeMessage("Produto removido do carrinho", "rgb(255, 63, 63)", 1000);
  };

  const acrescentItem = () => {
    const v = productsArr.find((item) => item.id === product.id);
    setProductCart((prevProductCart) => ({
      ...prevProductCart,
      quantity: prevProductCart.quantity + 1,
      websitePrice: prevProductCart.websitePrice + v?.websitePrice,
    }));
    const updatedProductsCart = productsCart.map((item) => {
      if (item.id === productCart.id) {
        return productCart;
      }
      return item;
    });
    setProductsCart(updatedProductsCart);
    console.log(productsCart);
  };

  const decresentItem = () => {
    const v = productsArr.find((item) => item.id === product.id);
    setProductCart((prevProductCart) => {
      const newQuantity = prevProductCart.quantity - 1;
      const newWebsitePrice =
        prevProductCart.websitePrice - (v?.websitePrice ?? 0);
      console.log(newQuantity);

      if (newQuantity === 0) {
        // Remove the item from the cart if the quantity is zero
        const newProductsCart = productsCart.filter(
          (item) => item.id !== productCart.id
        );
        setProductsCart(newProductsCart);
        changeMessage("Produto removido do carrinho", "rgb(255, 63, 63)", 1000);
        console.log(newProductsCart);
      } else {
        const updatedProductsCart = productsCart.map((item) => {
          if (item.id === productCart.id) {
            return productCart;
          }
          return item;
        });
        setProductsCart(updatedProductsCart);
      }

      return {
        ...prevProductCart,
        quantity: newQuantity,
        websitePrice: newWebsitePrice,
      };
    });
  };

  return (
    <div key={product.id} className="card-itens-payment__content__product">
      <div className="group-buttons-item-cart">
        <button
          onClick={decresentItem}
          className="group-buttons-item-cart__btn btn__1"
        >
          -
        </button>
        <div className="group-buttons-item-cart__quant">
          {productCart.quantity}
        </div>
        <button
          onClick={acrescentItem}
          className="group-buttons-item-cart__btn btn__2"
        >
          +
        </button>
      </div>

      <div className="card-itens-payment__content__product__img">
        <img
          className="card-itens-payment__content__product__img__img"
          src={productCart.srcImg}
        />
      </div>
      <div className="card-itens-payment__content__product__info">
        <div>
          <h3 className="card-itens-payment__content__product__info__title">
            {productCart.name}
          </h3>
          <p className="card-itens-payment__content__product__info__desc">
            {productCart.description}
          </p>
        </div>
        <div className="group-price">
          <button className="group-price__btn-rm" onClick={removeProductCart}>
            Remover
          </button>
          <p className="group-price__price">
            {formatCurrencyBRL(
              Number(Number(productCart.websitePrice).toFixed(2))
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
