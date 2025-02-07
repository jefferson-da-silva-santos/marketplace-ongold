import React from "react";

const HeaderPayment = ({setStage, handleNotFound}) => {
  return (
    <header className="header-payment">
      <h1 className="header-payment__title" onClick={() => {
        setStage('home')
      }}>
        Comprar<span>Daqui</span><img src="/public/sacolas-de-compras.png" alt="" />
      </h1>
      <button onClick={handleNotFound} className="button-andrees">Entregar em</button>
    </header>
  );
};

export default HeaderPayment;
