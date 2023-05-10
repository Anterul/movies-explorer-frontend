import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function MenuPopup({ isOpen, onClose }) {
  return (
    <div className={`menu-popup ${isOpen ? "menu-popup_opened" : ""}`}>
      <div className="menu-popup__container">
        <button
          className="menu-popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <Navigation onClose={onClose} />
        <button className="menu-popup__account-button" type="button">
          <Link
            className="manu-popup__account-text"
            to="/profile"
            onClick={onClose}
          >
            Аккаунт
          </Link>
          <div className="manu-popup__account-icon"></div>
        </button>
      </div>
    </div>
  );
}

export default MenuPopup;
