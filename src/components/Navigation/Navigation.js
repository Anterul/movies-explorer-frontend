import { Link } from "react-router-dom";

function Navigation({ onClose }) {
  return (
    <div className="navigation">
      <Link className="navigation__link" to="/" onClick={onClose}>
        Главная
      </Link>
      <Link className="navigation__link" to="/movies" onClick={onClose}>
        Фильмы
      </Link>
      <Link className="navigation__link" to="/saved-movies" onClick={onClose}>
        Сохранённые фильмы
      </Link>
    </div>
  );
}

export default Navigation;
