import React from "react";

const HomePage = ({ payment }) => {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={payment}>Pagar</button>
    </div>
  );
};

export default HomePage;
