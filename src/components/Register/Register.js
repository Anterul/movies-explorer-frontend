import { useState } from "react";
import { NavLink } from "react-router-dom";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSignUp(name, email, password);
  }

  return (
    <div className="register">
      <NavLink className="register__logo" to="/"></NavLink>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__input-container">
          <label className="register__label">Имя</label>
          <input
            className="register__input"
            value={name}
            onChange={handleNameChange}
            type="name"
            name="name"
            id="name"
            required
          />
          <span className="register__error-message"></span>
        </div>

        <div className="register__input-container">
          <label className="register__label">E-mail</label>
          <input
            className="register__input"
            value={email}
            onChange={handleEmailChange}
            type="email"
            name="email"
            id="email"
            required
          />
          <span className="register__error-message"></span>
        </div>
        <div className="register__input-container">
          <label className="register__label">Пароль</label>
          <input
            className="register__input"
            value={password}
            onChange={handlePasswordChange}
            type="password"
            name="password"
            id="password"
            required
          />
          <span className="register__error-message">
            Что-то пошло не так...
          </span>
        </div>
        <button className="register__submit-button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <p className="register__link-text">
        Уже зарегистрированы?
        <NavLink className="register__link" to="/signin">
          Войти
        </NavLink>
      </p>
    </div>
  );
}

export default Register;
