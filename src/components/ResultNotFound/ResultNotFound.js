import { useNavigate } from "react-router-dom";

function ResultNotFound() {
  const navigate = useNavigate();
  return (
    <div className="result-not-found">
      <h2 className="result-not-found__title">404</h2>
      <p className="result-not-found__message">Страница не найдена</p>
      <button
        className="result-not-found__go-back"
        type="button"
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
    </div>
  );
}

export default ResultNotFound;
