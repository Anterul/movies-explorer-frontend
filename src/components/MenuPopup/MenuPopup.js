import { Link } from "react-router-dom";

function MenuPopup({ isOpen, onClose }) {
  return (
    <div className={`menu-popup ${isOpen ? "menu-popup_opened" : ""}`}>
      <div className="menu-popup__container">
        <button
          className="menu-popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <div className="menu-popup__link-container">
          <Link className="menu-popup__link" to="/">
            Главная
          </Link>
          <Link className="menu-popup__link" to="/movies">
            Фильмы
          </Link>
          <Link className="menu-popup__link" to="/saved-movies">
            Сохранённые фильмы
          </Link>
        </div>
        <button className="menu-popup__account-button" type="button">
          <p className="manu-popup__account-text">Аккаунт</p>
          <div className="manu-popup__account-icon"></div>
        </button>
      </div>
    </div>
  );
}

export default MenuPopup;
