import React from "react";

const PaymentPage = ({restart}) => {
  return (
    <div>
      <h1>Payment Page</h1>
      <button onClick={restart}>Sair</button>
    </div>
  )
}

export default PaymentPage;