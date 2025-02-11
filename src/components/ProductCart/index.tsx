import React from "react";

const ProductCart = ({formatCurrencyBRL, product, productsCart, setProductsCart, changeMessage}) => {

  // Função responsável por remover um item do carrinho de compras
   const removeProductCart = (e) => {
    e.preventDefault();
    const newProducts = productsCart.filter((productCart) => productCart.id !== product.id);
    setProductsCart(newProducts);
    changeMessage("Produto removido do carrinho", "rgb(255, 63, 63)", 1000);
   }

     // Função responsável por aumentar a quantidade do produto no carrinho
     const increaseProductQuantity = (e) => {
      e.preventDefault();
    
      setProductsCart((prevProductsCart) => 
        prevProductsCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    
      changeMessage("Quantidade aumentada", "rgb(63, 255, 63)", 1000);
    };

  return (
    <div key={product.id} className="card-itens-payment__content__product">

    <div className="group-buttons-item-cart">
      <button className="group-buttons-item-cart__btn btn__1">-</button>
      <div className="group-buttons-item-cart__quant">{product.quantity}</div>
      <button onClick={increaseProductQuantity} className="group-buttons-item-cart__btn btn__2">+</button>
    </div>

    <div className="card-itens-payment__content__product__img">
      <img
        className="card-itens-payment__content__product__img__img"
        src={product.srcImg}
      />
    </div>
    <div className="card-itens-payment__content__product__info">
      <div>
        <h3 className="card-itens-payment__content__product__info__title">
          {product.name}
        </h3>
        <p className="card-itens-payment__content__product__info__desc">
          {product.description}
        </p>
      </div>
      <div className="group-price">
        <button className="group-price__btn-rm" onClick={removeProductCart}>Remover</button>
        <p className="group-price__price">{formatCurrencyBRL(Number(Number(product.websitePrice).toFixed(2)))}</p>
      </div>
    </div>
  </div>
  );
};

export default ProductCart;
