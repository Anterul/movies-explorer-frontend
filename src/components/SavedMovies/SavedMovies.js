import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import SearchForm from "../Movies/SearchForm/SearchForm";

function SavedMovies(props) {
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

export default SavedMovies;
