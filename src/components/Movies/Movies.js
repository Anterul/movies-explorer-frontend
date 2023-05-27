import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";

function Movies(props) {
  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} onMenuClick={props.onMenuClick} />
      <main className="movies">
        <SearchForm />
        <FilterCheckbox />
        <MoviesCardList postsToRender={props.postsToRender} next={props.next} />
        <Preloader onLoadMoreClick={props.onLoadMoreClick} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
