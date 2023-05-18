import { useState } from "react";
import { NavLink } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSignUp(email, password);
  }

  return (
    <div className="login">
      <NavLink className="login__logo" to="/"></NavLink>
      <h2 className="login__title">Рады видеть !</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__input-container">
          <label className="login__label">E-mail</label>
          <input
            className="login__input"
            value={email}
            onChange={handleEmailChange}
            type="email"
            name="email"
            id="email"
            required
          />
          <span className="login__error-message"></span>
        </div>
        <div className="login__input-container">
          <label className="login__label">Пароль</label>
          <input
            className="login__input"
            value={password}
            onChange={handlePasswordChange}
            type="password"
            name="password"
            id="password"
            required
          />
          <span className="login__error-message">Что-то пошло не так...</span>
        </div>
        <button className="login__submit-button" type="submit">
          Войти
        </button>
      </form>
      <p className="login__link-text">
        Ещё не зарегистрированы?
        <NavLink className="login__link" to="/signup">
          Регистрация
        </NavLink>
      </p>
    </div>
  );
}

export default Login;
