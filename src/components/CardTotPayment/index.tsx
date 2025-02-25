import React, { useMemo } from "react";

const CardTotPayment = ({ quantityItensCart, formatCurrencyBRL, productsCart, setProductsCart, changeMessage }) => {

  // Memoriza o cálculo do total, será recalculado apenas quando productsCart mudar
  const total = useMemo(() => {
    return productsCart.reduce((acc, product) => acc + product.websitePrice, 0);
  }, [productsCart]); // Recalcula sempre que productsCart mudar

  // Calculando o valor total mais o frete
  const totalWithFreight = total + 10;

  console.log(productsCart);

  return (
    <div className="group-card-tot-payment">
      <section className="card-tot-payment">
        <div className="card-tot-payment__header">
          <h3 className="card-tot-payment__header__title">Resumo carrinho</h3>
        </div>
        <div className="card-tot-payment__itens">
          <p className="card-tot-payment__itens__text-1">Itens <span>({quantityItensCart})</span></p>
          <p className="card-tot-payment__itens__text">{formatCurrencyBRL(total)}</p>
        </div>
        <div className="card-tot-payment__freight">
          <p className="card-tot-payment__freight__text-1">Frete</p>
          <p className="card-tot-payment__freight__text">R$ 10,00</p>
        </div>
        <div className="card-tot-payment__total">
          <p className="card-tot-payment__total__text-1">Total a pagar</p>
          <p className="card-tot-payment__total__text">{formatCurrencyBRL(totalWithFreight)}</p>
        </div>
      </section>
      <button onClick={() => {
        setProductsCart([]); // Limpa o carrinho
        changeMessage('Seu pedido foi enviado!', 'rgb(115, 187, 115)', 3000);
      }} className="card-tot-payment__btn">
        Finalizar compra
      </button>
    </div>
  )
}

export default CardTotPayment;
