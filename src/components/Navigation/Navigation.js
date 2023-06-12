import { Link } from "react-router-dom";

function Navigation({ onClose }) {
  function handleClose() {
    onClose();
  }
  return (
    <div className="navigation">
      <Link className="navigation__link" to="/" onClick={handleClose}>
        Главная
      </Link>
      <Link className="navigation__link" to="/movies" onClick={handleClose}>
        Фильмы
      </Link>
      <Link
        className="navigation__link"
        to="/saved-movies"
        onClick={handleClose}
      >
        Сохранённые фильмы
      </Link>
    </div>
  );
}

export default Navigation;
