import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import PaymentPage from "./components/PaymentPage";
import "./assets/css/styles.css";

const stages = [
  { id: 1, name: "login" },
  { id: 2, name: "home" },
  { id: 3, name: "payment" },
];

// Função responsável por formatar os números para o padrão PT-BR
function formatCurrencyBRL(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

const App = () => {
  const [stage, setStage] = useState(stages[0].name);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState('Username');
  const [productsCart, setProductsCart] = useState([]);

  // Função que faz a troca de página de login para página Home
  const login = () => {
    setStage(stages[1].name);
  };

  // Função que faz a troca de página de Home para página de Pagamentos
  const payment = () => {
    setStage(stages[2].name);
  };

  // Função para os recursos que ainda estão em construção
  const handleNotFound = (e) => {
    e.preventDefault();
    changeMessage('Recurso ainda em construção!', "rgb(255, 63, 63)", 2000);
  }

  const [messageVisible, setMessageVisible] = useState(false);
  const [colorMessage, setColorMessage] = useState("red");
  const [quantityItensCart, setQuantityItensCart] = useState(0);

  // Função de alterar mesagem para o usuário
  const changeMessage = (text, color, temp) => {
    setMessage(text);
    setMessageVisible(true);
    setColorMessage(color);
    setTimeout(() => {
      setMessage("");
      setMessageVisible(false);
    }, temp);
  };

  return (
    <div className="App">
      <div
        style={{
          ...(!messageVisible
            ? { visibility: "hidden" }
            : { visibility: "visible" }), // Outro estilo inline
          backgroundColor: colorMessage, // Mais um exemplo
        }}
        className="message"
      >
        <p className="message__txt">{message}</p>
      </div> 
      {stage === "login" && <LoginForm login={login} changeMessage={changeMessage} handleNotFound={handleNotFound}/>}
      {stage === "home" && <HomePage quantityItensCart={quantityItensCart} setQuantityItensCart={setQuantityItensCart} handleNotFound={handleNotFound} formatCurrencyBRL={formatCurrencyBRL} changeMessage={changeMessage} productsCart={productsCart} setProductsCart={setProductsCart} user={user} payment={payment} setStage={setStage}/>}
      {stage === "payment" && <PaymentPage setQuantityItensCart={setQuantityItensCart} quantityItensCart={quantityItensCart} handleNotFound={handleNotFound} formatCurrencyBRL={formatCurrencyBRL} productsCart={productsCart} setProductsCart={setProductsCart} setStage={setStage} changeMessage={changeMessage}/>}
    </div>
  );
};

export default App;
