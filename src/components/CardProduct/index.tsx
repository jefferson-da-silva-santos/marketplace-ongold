import React from "react";

const CardProduct = ({title, imgSrc, description, webSitePrice, storePrice}) => {
  return (
    <div className="card-product">
      <div className="card-product__image" style={{backgroundImage: `url(${imgSrc})`}}></div>
      <div className="card-product__info">
        <h2 className="card-product__title">{title}</h2>
        <p className="card-product__description">{description}</p>
        <p className="card-product__website-price">Preço no Site: <strong>R$ {webSitePrice}</strong></p>
        <p className="card-product__store-price">Preço na Loja: <strong>R$ {storePrice}</strong></p>
        <a href="" className="card-product__btn"><i className="bi bi-cart-plus-fill"></i></a>
      </div>
    </div>
  )
}

export default CardProduct;