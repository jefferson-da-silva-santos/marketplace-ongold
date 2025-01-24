import React from "react";

const CardProduct = ({title, imgSrc, description, webSitePrice, storePrice}) => {
  return (
    <div className="card-product">
      <div className="group-image"><img src={imgSrc} alt="Produto" className="card-product__image"/></div>
      <div className="card-product__info">
        <h2 className="card-product__title">{title}</h2>
        <p className="card-product__description">{description}</p>
        <div className="preces-group">
          <p className="card-product__website-price">R${webSitePrice}</p>
          <p className="card-product__store-price">R${storePrice}</p>
        </div>
        <a href="" className="card-product__btn"><i className="bi bi-cart-plus-fill"></i></a>
      </div>
    </div>
  )
}

export default CardProduct;