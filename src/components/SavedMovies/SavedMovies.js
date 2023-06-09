import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import SavedMoviesCardList from "./SavedMoviesCardList/SavedMoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";

function SavedMovies({
  isLoggedIn,
  onMenuClick,
  savedMovies,
  isShort,
  handleIsShort,
  moviesRequestError,
  onMovieDelete,
  isSearchButtonPressed,
  executeSearchQuery,
  searchQuery,
  setSearchQuery,
  handleMoviesRequestError,
  handleSearchButton,
}) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} onMenuClick={onMenuClick} />
      <main className="saved-movies">
        <SearchForm
          executeSearchQuery={executeSearchQuery}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleMoviesRequestError={handleMoviesRequestError}
          handleSearchButton={handleSearchButton}
        />
        <FilterCheckbox isShort={isShort} handleIsShort={handleIsShort} />
        <SavedMoviesCardList
          savedMovies={savedMovies}
          isShort={isShort}
          moviesRequestError={moviesRequestError}
          onMovieDelete={onMovieDelete}
          isSearchButtonPressed={isSearchButtonPressed}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
