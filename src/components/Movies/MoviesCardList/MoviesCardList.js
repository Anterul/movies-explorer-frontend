import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ postsToRender, next }) {
  return (
    <ul className="movies-card-list">
      {postsToRender?.slice(0, next)?.map((movie, index) => (
        <MoviesCard movie={movie} key={index} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
