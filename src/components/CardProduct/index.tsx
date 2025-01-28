import React from "react";

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
  formatCurrencyBRL
}) => {
  return (
    <div className="card-product">
      <div className="group-image">
        <img src={imgSrc} alt="Produto" className="card-product__image" />
      </div>
      <div className="card-product__info">
        <h2 className="card-product__title">{title}</h2>
        <p className="card-product__description">{description}</p>
        <div className="preces-group">
          <p className="card-product__website-price">R${formatCurrencyBRL(webSitePrice)}</p>
          <p className="card-product__store-price">R${formatCurrencyBRL(storePrice)}</p>
        </div>
        <a
          onClick={(e) => {
            e.preventDefault();

            // Encontrar o produto clicado
            const product = products.find((product) => product.id === id);

            if (!product) {
              changeMessage("Produto não encontrado", "rgb(255, 63, 63)");
              return;
            }

            // Atualizar o carrinho
            setProductsCart((prevCart) => {
              const existingProductIndex = prevCart.findIndex(
                (item) => item.id === id
              );

              if (existingProductIndex > -1) {
                // Produto já existe no carrinho, atualizar a quantidade e preço
                return prevCart.map((item, index) =>
                  index === existingProductIndex
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                        websitePrice:
                          item.websitePrice + product.websitePrice,
                      }
                    : item
                );
              } else {
                // Produto ainda não está no carrinho, adicioná-lo com quantity
                return [
                  ...prevCart,
                  {
                    ...product,
                    quantity: 1,
                  },
                ];
              }
            });

            // Mensagem de sucesso
            changeMessage(
              "Produto adicionado ao carrinho",
              "rgb(115, 187, 115)"
            );
            console.log(productsCart);
            
          }}
          href=""
          className="card-product__btn"
        >
          <i className="bi bi-cart-plus-fill"></i>
        </a>
      </div>
    </div>
  );
};

export default CardProduct;
