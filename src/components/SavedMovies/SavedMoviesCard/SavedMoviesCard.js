import convertToHours from "../../../utils/ConvertToHours";

function SavedMoviesCard(props) {
  function handleDeleteClick() {
    props.onMovieDelete(props.movie);
  }

  return (
    <article className="movies-card">
      <a
        className="movies-card__link"
        href={props.movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movies-card__image"
          src={props.movie.image}
          alt={props.movie.nameRU}
        />
      </a>
      <h2 className="movies-card__name">{props.movie.nameRU}</h2>
      <p className="movies-card__duration">
        {convertToHours(props.movie.duration)}
      </p>
      <button
        className="movies-card__delete-button"
        type="button"
        onClick={handleDeleteClick}
      ></button>
    </article>
  );
}

export default SavedMoviesCard;
