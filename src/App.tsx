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

const App = () => {
  const [stage, setStage] = useState(stages[0].name);
  const [message, setMessage] = useState("");

  const login = () => {
    setStage(stages[1].name);
  };

  const payment = () => {
    setStage(stages[2].name);
  };

  const restart = () => {
    setStage(stages[0].name);
  };

  const [messageVisible, setMessageVisible] = useState(false);
  const [colorMessage, setColorMessage] = useState("red");

  // Função de alterar mesagem
  const changeMessage = (text, color) => {
    setMessage(text);
    setMessageVisible(true);
    setColorMessage(color);
    setTimeout(() => {
      setMessage("");
      setMessageVisible(false);
    }, 3000);
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
      {stage === "login" && <LoginForm login={login} />}
      {stage === "home" && <HomePage payment={payment} />}
      {stage === "payment" && <PaymentPage restart={restart} />}
    </div>
  );
};

export default App;
