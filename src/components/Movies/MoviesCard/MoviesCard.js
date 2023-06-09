import convertToHours from "../../../utils/ConvertToHours";

function MoviesCard({ savedMovies, movie, onMovieLike }) {
  const isLiked = savedMovies
    ? savedMovies.some((item) => Number(item.movieId) === movie.id)
    : false;

  function handleLikeClick() {
    onMovieLike(movie);
  }

  return (
    <article className="movies-card">
      <a
        className="movies-card__link"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movies-card__image"
          src={"https://api.nomoreparties.co" + movie.image.url}
          alt={movie.nameRU}
        />
      </a>
      <h2 className="movies-card__name">{movie.nameRU}</h2>
      <p className="movies-card__duration">{convertToHours(movie.duration)}</p>
      <button
        className={`movies-card__like-button ${
          isLiked ? "movies-card__like-button_active" : ""
        }`}
        type="button"
        onClick={handleLikeClick}
      ></button>
    </article>
  );
}

export default MoviesCard;
