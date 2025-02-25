import React, { useState, useEffect } from "react";
import productsArr from "../../data/products.json";

const ProductCart = ({
  formatCurrencyBRL,
  product,
  productsCart,
  setProductsCart,
  changeMessage,
  setQuantityItensCart, // Recebe a função que vai controlar o set de quantidade
}) => {
  const [productCart, setProductCart] = useState(product);

  // Sincronizando productCart com o estado global de productsCart
  useEffect(() => {
    const productInCart = productsCart.find((item) => item.id === product.id);
    if (productInCart) {
      setProductCart(productInCart);
    }
  }, [productsCart, product.id]);

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
    setProductCart((prevProductCart) => {
      const updatedQuantity = prevProductCart.quantity + 1;
      const updatedWebsitePrice = prevProductCart.websitePrice + v?.websitePrice;
      const updatedProduct = {
        ...prevProductCart,
        quantity: updatedQuantity,
        websitePrice: updatedWebsitePrice,
      };

      // Atualiza o carrinho global
      const updatedProductsCart = productsCart.map((item) => 
        item.id === prevProductCart.id ? updatedProduct : item
      );
      setProductsCart(updatedProductsCart);
      setQuantityItensCart((prev) => prev + 1); // Incrementa o contador global de itens
      return updatedProduct;
    });
  };

  const decresentItem = () => {
    const v = productsArr.find((item) => item.id === product.id);
    setProductCart((prevProductCart) => {
      const updatedQuantity = prevProductCart.quantity - 1;
      const updatedWebsitePrice =
        prevProductCart.websitePrice - (v?.websitePrice ?? 0);

      if (updatedQuantity <= 0) {
        // Remove o item do carrinho se a quantidade for zero ou negativa
        const newProductsCart = productsCart.filter(
          (item) => item.id !== prevProductCart.id
        );
        setProductsCart(newProductsCart);
        changeMessage("Produto removido do carrinho", "rgb(255, 63, 63)", 1000);
        setQuantityItensCart((prev) => prev - 1); // Decrementa o contador global de itens
        return null;
      } else {
        const updatedProduct = {
          ...prevProductCart,
          quantity: updatedQuantity,
          websitePrice: updatedWebsitePrice,
        };

        // Atualiza o carrinho global
        const updatedProductsCart = productsCart.map((item) =>
          item.id === prevProductCart.id ? updatedProduct : item
        );
        setProductsCart(updatedProductsCart);
        setQuantityItensCart((prev) => prev - 1); // Decrementa o contador global de itens
        return updatedProduct;
      }
    });
  };

  // Renderiza o produto no carrinho, removendo se necessário
  if (!productCart) return null;

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
            {formatCurrencyBRL(Number(Number(productCart.websitePrice).toFixed(2)))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
