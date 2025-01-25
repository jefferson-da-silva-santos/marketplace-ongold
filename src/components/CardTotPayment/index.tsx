import React from "react";

const CardTotPayment = () => {
  return (
    <div className="group-card-tot-payment">
      <section className="card-tot-payment">
        <div className="card-tot-payment__header">
          <h3 className="card-tot-payment__header__title">Resumo carrinho</h3>
        </div>
        <div className="card-tot-payment__itens">
          <p className="card-tot-payment__itens__text">Itens (4)</p>
          <p className="card-tot-payment__itens__text">R$ 100,00</p>
        </div>
        <div className="card-tot-payment__freight">
          <p className="card-tot-payment__freight__text">Desconto</p>
          <p className="card-tot-payment__freight__text">R$ 10,00</p>
        </div>
        <div className="card-tot-payment__total">
          <p className="card-tot-payment__total__text">Total a pagar</p>
          <p className="card-tot-payment__total__text">R$ 90,00</p>
        </div>
      </section>
      <button className="card-tot-payment__btn">Finalizar compra</button>
    </div>
  )
}

export default CardTotPayment;