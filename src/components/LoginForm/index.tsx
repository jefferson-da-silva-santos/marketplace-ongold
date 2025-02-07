import React, { useState } from "react";
import Container from "../Container";
import CardLogin from "../CardLogin";
import LogoLogin from "../LogoLogin";
import users from "../../data/users.json";
import { useFormik } from "formik";

const LoginForm = ({ login, changeMessage, setUser, handleNotFound }) => {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Campo obrigatório";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Endereço de email inválido";
    }

    if (!values.password) {
      errors.password = "Campo obrigatório";
    } else if (values.password.length < 8) {
      errors.password = "A senha deve ter pelo menos 8 caracteres";
    } else if (!/[A-Z]/.test(values.password)) {
      errors.password = "A senha deve ter pelo menos uma letra maiúscula";
    } else if (!/[a-z]/.test(values.password)) {
      errors.password = "A senha deve ter pelo menos uma letra minúscula";
    } else if (!/[0-9]/.test(values.password)) {
      errors.password = "A senha deve conter pelo menos um número";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
      errors.password = "A senha deve conter pelo menos um caractere especial";
    }                     

    return errors;
  };
  // Função de alterar vizibilidade da senha
  const [showPassword, setShowPassword] = useState(false);

  // Alternar valores de showPassword
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const searchUser = (emailUser: string, passwordUser: string) => {
    return users.some(
      (user) => user.email === emailUser && user.password === passwordUser
    );
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      if (searchUser(values.email, values.password)) {
        login();
        changeMessage('Login realizado!', 'green', 1000);
      } else {
        changeMessage("E-mail ou senha inválidos. Verifique suas credenciais e tente novamente.", 'red', 4000);
      }
    },
  });

  return (
    <Container className={"container-login"}>
      <CardLogin>
        <LogoLogin />
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="group-input">
            <a
              href=""
              className="group-input__icon"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <i className={`bi bi-envelope-fill`}></i>
            </a>
            <input
              required
              className="group-input__input"
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu email ou número"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="error-form">{formik.errors.email}</span>
            ) : null}
          </div>
          <div className="group-input">
            <a
              href=""
              className="group-input__icon"
              onClick={handleShowPassword}
            >
              <i
                className={`bi ${!showPassword ? "bi-eye-slash" : "bi-eye"}`}
              ></i>
            </a>
            <input
              required
              className="group-input__input"
              type={!showPassword ? "password" : "text"}
              name="password"
              id="password"
              placeholder="Digite sua senha"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <span className="error-form">{formik.errors.password}</span>
            ) : null}
          </div>
          <button type="submit" className="btn-form">
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
