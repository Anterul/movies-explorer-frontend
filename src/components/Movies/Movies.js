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
        <SearchForm
          executeSearchQuery={props.executeSearchQuery}
          onSearchButtonClick={props.onSearchButtonClick}
          resetSetNext={props.resetSetNext}
        />
        <FilterCheckbox />
        <MoviesCardList
          postsToRender={props.postsToRender}
          next={props.next}
          searchButtonWasPressed={props.searchButtonWasPressed}
        />
        <Preloader
          onLoadMoreClick={props.onLoadMoreClick}
          postsToRender={props.postsToRender}
          next={props.next}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
