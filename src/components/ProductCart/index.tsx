import React from "react";

const ProductCart = ({product}) => {
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
          {product.name}
        </h3>
        <p className="card-itens-payment__content__product__info__desc">
          {product.description}
        </p>
      </div>
      <div className="group-price">
        <button className="group-price__btn-rm">Remover</button>
        <p className="group-price__price">{product.websitePrice}</p>
      </div>
    </div>
  </div>
  );
};

export default ProductCart;
