import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header({ isLoggedIn, onMenuClick }) {
  const [width, setWidth] = useState(window.innerWidth);
  function hadleScreenWidth() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", hadleScreenWidth);
    return () => window.removeEventListener("resize", hadleScreenWidth);
  });
  const screenWidth = width >= 1280;

  return (
    <>
      {isLoggedIn ? (
        <header className="header">
          <div className="header__logo"></div>
          <div className="header__auth-link-container">
            <Link className="header__auth-link" to="/signup">
              Регистрация
            </Link>
            <Link className="header__auth-link" to="/signin">
              <button className="header__signin-button" type="button">
                Войти
              </button>
            </Link>
          </div>
        </header>
      ) : (
        <header className="header">
          <div className="header__logo"></div>
          {screenWidth ? (
            <div className="header__menu-container">
              <div className="header__films-link-container">
                <Link className="header__movies-link" to="/movies">
                  Фильмы
                </Link>
                <Link className="header__saved-movies-link" to="/saved-movies">
                  Сохранённые фильмы
                </Link>
              </div>
              <button className="header__profile-button" type="button">
                <p className="header__account-text">Аккаунт</p>
                <div className="header__account-icon"></div>
              </button>
            </div>
          ) : (
            <button
              className="header__menu"
              type="button"
              onClick={onMenuClick}
            ></button>
          )}
        </header>
      )}
    </>
  );
}

export default Header;
