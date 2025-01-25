import React from "react";

const CardItensPayment = ({children}) => {
  return (
    <section className="card-itens-payment">
      <div className="card-itens-payment__header">
        <h2 className="card-itens-payment__header__title">
          Meu carrinho <span className="quant-itens">(4 itens)</span>
        </h2>
      </div>
      <div className="card-itens-payment__info">
        <p className="card-itens-payment__info__text">Items</p>
        <p className="card-itens-payment__info__text">Valor</p>
      </div>
      <div className="card-itens-payment__content">
        {children}
      </div>
    </section>
  );
};

export default CardItensPayment;
