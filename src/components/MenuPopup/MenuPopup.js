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
        <Link
          className="menu-popup__account-icon"
          to="/profile"
          onClick={onClose}
        ></Link>
      </div>
    </div>
  );
}

export default MenuPopup;
