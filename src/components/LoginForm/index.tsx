import React, { useState } from "react";
import Container from "../Container";
import CardLogin from "../CardLogin";
import LogoLogin from "../LogoLogin";
import GroupInput from "../GroupInput";
import users from "../../data/users.json";

const LoginForm = ({ login, changeMessage, setUser, handleNotFound }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Função para fazer login
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateDateUsers(email, password)) {
      if (searchUser(email, password)) {
        changeMessage("Login realizado!", "rgb(115, 187, 115)");
        const username = getNameUserPerEmail(email);
        setUser(username);
        login();
      } else {
        changeMessage("O usuário não existe!", "rgb(255, 63, 63)");
      }
    } else {
      changeMessage("Passe um email e uma senha válidos!", "rgb(255, 63, 63)");
    }
  };

  /*
   Função responsável por retornar o nome do usuário através do email
   Esse nome é enviado para a página Home
   */
  const getNameUserPerEmail = (email: string) => {
    return users.find((user) => user.email === email)?.name;
  };

  // Função que faz a validação dos dados passados pelo usuário
  const validateDateUsers = (email: string, password: string) => {
    if (typeof email !== "string" || email.trim() === "") {
      return false;
    }
    if (
      typeof password !== "string" ||
      password.trim() === "" ||
      password.length < 6
    ) {
      return false;
    }
    return true;
  };

  // Função que faz a a busca do email e senha no arquivo json de dados
  const searchUser = (emailUser: string, passwordUser: string) => {
    return users.some(
      (user) => user.email === emailUser && user.password === passwordUser
    );
  };

  // Função de alterar vizibilidade da senha
  const [showPassword, setShowPassword] = useState(false);

  // Alternar valores de showPassword
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <Container className={"container-login"}>
      <CardLogin>
        <LogoLogin />
        <form className="form">
          <GroupInput
            classIcon={"bi-envelope-fill"}
            onClick={(e) => {
              e.preventDefault();
            }}
            id={"email"}
            name={"email"}
            placeholder={"Digite seu email ou número"}
            type={"email"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <GroupInput
            classIcon={!showPassword ? "bi-eye-slash" : "bi-eye"}
            onClick={handleShowPassword}
            id={"password"}
            name={"password"}
            placeholder={"Digite sua senha"}
            type={!showPassword ? "password" : "text"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="btn-form" onClick={handleSubmit}>
            Entrar
          </button>
          <div className="form-group">
            <a onClick={handleNotFound} className="form-group__text">
              * Esqueci minha senha *
            </a>
          </div>
        </form>
      </CardLogin>
    </Container>
  );
};

export default LoginForm;
