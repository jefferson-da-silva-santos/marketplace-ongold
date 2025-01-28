import React from "react";

const HeaderPayment = ({handleNotFound}) => {
  return (
    <header className="header-payment">
      <h1 className="header-payment__title">
        Comprar<span>Daqui</span><img src="/public/sacolas-de-compras.png" alt="" />
      </h1>
      <button onClick={handleNotFound} className="button-andrees">Entregar em</button>
    </header>
  );
};

export default HeaderPayment;
