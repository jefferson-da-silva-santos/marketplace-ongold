import React, { useState } from "react";
import Container from "../Container";
import HeaderPayment from "../HeaderPayment";
import CardItensPayment from "../CardItensPayment";
import products from "../../data/products.json";
import ProductCart from "../ProductCart";

const PaymentPage = ({ restart }) => {
  console.log(products);
  const [productsCart, setProductsCart] = useState(products);
  console.log(productsCart);

  return (
    <Container className={"container-payment"}>
      <HeaderPayment />
      <main className="main-payment">
        <CardItensPayment>
          {productsCart.map((product) => {
            return (
              <ProductCart key={product.id} product={product} />
            );
          })}
        </CardItensPayment>
      </main>
      <button onClick={restart}>Sair</button>
    </Container>
  );
};

export default PaymentPage;
