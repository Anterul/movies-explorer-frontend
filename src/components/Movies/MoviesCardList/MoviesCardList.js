import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      {props.movies.map((movie) => (
        <MoviesCard movie={movie} key={movie._id} />
      ))}
    </section>
  );
}

export default MoviesCardList;
