import React from "react";

const CardTotPayment = ({formatCurrencyBRL, productsCart}) => {

  // Filtrando o valor total do carrinho
  const total = Number(productsCart.reduce((acc, product) => acc + product.websitePrice, 0).toFixed(2));
  // Calculando o valor total mais o frete
  const totalWithFreight = (total + 10).toFixed(2);

  return (
    <div className="group-card-tot-payment">
      <section className="card-tot-payment">
        <div className="card-tot-payment__header">
          <h3 className="card-tot-payment__header__title">Resumo carrinho</h3>
        </div>
        <div className="card-tot-payment__itens">
          <p className="card-tot-payment__itens__text-1">Itens <span>({productsCart.length})</span></p>
          <p className="card-tot-payment__itens__text">R$ {formatCurrencyBRL(total)}</p>
        </div>
        <div className="card-tot-payment__freight">
          <p className="card-tot-payment__freight__text-1">Frete</p>
          <p className="card-tot-payment__freight__text">R$ 10,00</p>
        </div>
        <div className="card-tot-payment__total">
          <p className="card-tot-payment__total__text-1">Total a pagar</p>
          <p className="card-tot-payment__total__text">R$ {formatCurrencyBRL(Number(totalWithFreight))}</p>
        </div>
      </section>
      <button className="card-tot-payment__btn">Finalizar compra</button>
    </div>
  )
}

export default CardTotPayment;