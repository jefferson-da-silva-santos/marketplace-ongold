import React, { useState } from "react";
import Container from "../Container";
import HeaderPayment from "../HeaderPayment";
import CardItensPayment from "../CardItensPayment";
import ProductCart from "../ProductCart";
import CardTotPayment from "../CardTotPayment";
import EmptyCart from "../EmptyCart";

const PaymentPage = ({ handleNotFound, setStage, productsCart, setProductsCart, changeMessage, formatCurrencyBRL }) => {
  return (
    <Container className={"container-payment"}>
      <HeaderPayment handleNotFound={handleNotFound}/>
      <main className="main-payment">
        {productsCart.length === 0 && (
          <EmptyCart setStage={setStage}/>
        )}
        {productsCart.length > 0 && (
          <>
            <CardItensPayment  productsCart={productsCart}>
              {productsCart.map((product) => {
                return <ProductCart formatCurrencyBRL={formatCurrencyBRL} key={product.id} product={product} productsCart={productsCart} setProductsCart={setProductsCart} changeMessage={changeMessage}/>;
              })}
            </CardItensPayment>
            <CardTotPayment setProductsCart={setProductsCart} changeMessage={changeMessage} formatCurrencyBRL={formatCurrencyBRL} productsCart={productsCart}/>
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
