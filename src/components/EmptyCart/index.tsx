import React from "react";

const EmptyCart = ({setStage}) => {
  return (
    <div className="empty-cart">
      <p className="empty-cart__text">* Seu carrinho está vazio</p>
      <button
        onClick={() => {
          setStage("home");
        }}
        className="empty-cart__btn"
      >
        Voltar para a loja
      </button>
      <p className="empty-cart__text">*</p>
    </div>
  );
};

export default EmptyCart;
