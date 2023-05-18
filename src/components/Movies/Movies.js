import Header from "../Header/Header";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

function Movies(props) {
  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} onMenuClick={props.onMenuClick} />
      <section className="movies">
        <SearchForm />
        <FilterCheckbox />
        <MoviesCardList movies={props.movies} />
      </section>
    </>
  );
}

export default Movies;
