import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import ERROR_MESSAGES from "../../../utils/Config";

function MoviesCardList({
  savedBeatfilms,
  nextDisplayedMovies,
  onMovieLike,
  onLoadMoreClick,
  isPreloader,
  moviesRequestError,
  isSearchButtonPressed,
  isShort,
  savedMovies,
}) {
  function handleLoadMore() {
    onLoadMoreClick();
  }

  const filteredShorts = isShort
    ? savedBeatfilms.filter((movie) => movie.duration <= 40)
    : savedBeatfilms;

  const isMoviesArrEnded =
    filteredShorts.length === 0 || nextDisplayedMovies >= filteredShorts.length;

  return (
    <div className="movies-card-list">
      {isPreloader ? (
        <Preloader />
      ) : moviesRequestError ? (
        <p className="movies-card-list__notification">
          {ERROR_MESSAGES.MOVIES.REQUEST_ERROR}
        </p>
      ) : filteredShorts.length === 0 && isSearchButtonPressed ? (
        <p className="movies-card-list__notification">
          {ERROR_MESSAGES.MOVIES.NOTHING}
        </p>
      ) : (
        <ul className="movies-card-list__list">
          {filteredShorts?.slice(0, nextDisplayedMovies)?.map((movie) => (
            <MoviesCard
              movie={movie}
              key={movie.id}
              onMovieLike={onMovieLike}
              savedMovies={savedMovies}
            />
          ))}
        </ul>
      )}

      {isMoviesArrEnded ? (
        ""
      ) : (
        <button
          className="movies-card-list__button"
          type="button"
          onClick={handleLoadMore}
        >
          Ещё
        </button>
      )}
    </div>
  );
}

export default MoviesCardList;
