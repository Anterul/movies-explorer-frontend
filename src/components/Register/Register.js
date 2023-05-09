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
      <div className="register__logo"></div>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__input-container">
          <label className="register__label">Имя</label>
          <input
            className="register__input"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            required
          />
          <span className="register__error-message"></span>
        </div>

        <input
          className="register__input"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          type="email"
          name="email"
          id="email"
          required
        />

        <input
          className="register__input"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Пароль"
          type="password"
          name="password"
          id="password"
          required
        />
        <button className="register__submit-button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <NavLink className="register__link" to="/signin">
        Уже зарегистрированы? Войти
      </NavLink>
    </div>
  );
}

export default Register;
