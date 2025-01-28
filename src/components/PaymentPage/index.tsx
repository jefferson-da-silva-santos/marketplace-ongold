import React, { useState } from "react";
import Container from "../Container";
import HeaderPayment from "../HeaderPayment";
import CardItensPayment from "../CardItensPayment";
import ProductCart from "../ProductCart";
import CardTotPayment from "../CardTotPayment";
const PaymentPage = ({ setStage, productsCart, setProductsCart, changeMessage, formatCurrencyBRL }) => {
  return (
    <Container className={"container-payment"}>
      <HeaderPayment />
      <main className="main-payment">
        {productsCart.length === 0 && (
          <div className="empty-cart">
            <p className="empty-cart__text">* Seu carrinho está vazio</p>
            <button onClick={() => {
              setStage("home");
            }} className="empty-cart__btn">Voltar para a loja</button>
            <p className="empty-cart__text">*</p>
          </div>
        )}
        {productsCart.length > 0 && (
          <>
            <CardItensPayment  productsCart={productsCart}>
              {productsCart.map((product) => {
                return <ProductCart formatCurrencyBRL={formatCurrencyBRL} key={product.id} product={product} productsCart={productsCart} setProductsCart={setProductsCart} changeMessage={changeMessage}/>;
              })}
            </CardItensPayment>
            <CardTotPayment formatCurrencyBRL={formatCurrencyBRL} productsCart={productsCart}/>
          </>
        )}
      </main>
      <button onClick={() => {
        setStage("home");
      }} className="button-cart-home">
      <i className="bi bi-house-door-fill"></i>
      </button>
    </Container>
  );
};

export default PaymentPage;
