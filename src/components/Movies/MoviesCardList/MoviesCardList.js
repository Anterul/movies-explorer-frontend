import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ postsToRender, next, searchButtonWasPressed }) {
  return (
    <ul className="movies-card-list">
      {postsToRender.length === 0 && searchButtonWasPressed ? (
        <p className="movies-card-list__notification">Ничего не найдено</p>
      ) : (
        postsToRender
          ?.slice(0, next)
          ?.map((movie, index) => <MoviesCard movie={movie} key={index} />)
      )}
    </ul>
  );
}

export default MoviesCardList;
