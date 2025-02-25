import React, { useEffect } from "react";

const CardProduct = ({
  id,
  products,
  title,
  imgSrc,
  description,
  webSitePrice,
  storePrice,
  setProductsCart,
  changeMessage,
  productsCart,
  formatCurrencyBRL,
}) => {
  useEffect(() => {
    console.log("Carrinho atualizado:", productsCart);
  }, [productsCart]); // Executa sempre que productsCart for atualizado

  const addItemCart = (e) => {
    e.preventDefault();

    // Encontrar o produto clicado
    const product = products.find((product) => product.id === id);

    if (!product) {
      changeMessage("Produto não encontrado", "rgb(255, 63, 63)", 2000);
      return;
    }

    // Atualizar o carrinho
    setProductsCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === id);

      if (existingProductIndex > -1) {
        // Produto já existe no carrinho, atualizar a quantidade e preço
        return prevCart.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1, // Aumenta a quantidade
                websitePrice: item.websitePrice + product.websitePrice, // Atualiza o preço
              }
            : item
        );
      } else {
        // Produto ainda não está no carrinho, adicioná-lo com quantity 1
        return [
          ...prevCart,
          {
            ...product,
            quantity: 1, // Inicializa a quantidade como 1
          },
        ];
      }
    });

    // Mensagem de sucesso
    changeMessage("Produto adicionado ao carrinho", "rgb(115, 187, 115)", 1000);
    console.log(productsCart);
  };

  return (
    <div className="card-product">
      <div className="group-image">
        <img src={imgSrc} alt="Produto" className="card-product__image" />
      </div>
      <div className="card-product__info">
        <h2 className="card-product__title">{title}</h2>
        <p className="card-product__description">{description}</p>
        <div className="preces-group">
          <p className="card-product__website-price">
            {formatCurrencyBRL(webSitePrice)}
          </p>
          <p className="card-product__store-price">
            {formatCurrencyBRL(storePrice)}
          </p>
        </div>
        <a onClick={addItemCart} href="" className="card-product__btn">
          <i className="bi bi-cart-plus-fill"></i>
        </a>
      </div>
    </div>
  );
};

export default CardProduct;
