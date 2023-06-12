import SavedMoviesCard from "../SavedMoviesCard/SavedMoviesCard";
import ERROR_MESSAGES from "../../../utils/Config";

function SavedMoviesCardList({
  savedMovies,
  isShort,
  moviesRequestError,
  onMovieDelete,
  isSearchButtonPressed,
}) {
  const filteredShorts = isShort
    ? savedMovies.filter((movie) => movie.duration <= 40)
    : savedMovies;

  return (
    <div className="movies-card-list">
      {moviesRequestError ? (
        <p className="movies-card-list__notification">
          {ERROR_MESSAGES.MOVIES.REQUEST_ERROR}
        </p>
      ) : filteredShorts.length === 0 && isSearchButtonPressed ? (
        <p className="movies-card-list__notification">
          {ERROR_MESSAGES.MOVIES.NOTHING}
        </p>
      ) : (
        <ul className="movies-card-list__list">
          {filteredShorts.map((movie) => (
            <SavedMoviesCard
              movie={movie}
              key={movie.movieId}
              onMovieDelete={onMovieDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default SavedMoviesCardList;
