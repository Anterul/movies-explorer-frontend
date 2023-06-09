import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

function Movies({
  isLoggedIn,
  onMenuClick,
  savedBeatfilms,
  next,
  onMovieLike,
  onLoadMore,
  executeSearchQuery,
  isShort,
  handleIsShort,
  searchQuery,
  setSearchQuery,
  isPreloader,
  handleSearchButton,
  handleMoviesRequestError,
  moviesRequestError,
  isSearchButtonPressed,
  savedMovies,
}) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} onMenuClick={onMenuClick} />
      <main className="movies">
        <SearchForm
          executeSearchQuery={executeSearchQuery}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          savedBeatfilms={savedBeatfilms}
          handleMoviesRequestError={handleMoviesRequestError}
          handleSearchButton={handleSearchButton}
        />
        <FilterCheckbox isShort={isShort} handleIsShort={handleIsShort} />

        <MoviesCardList
          savedBeatfilms={savedBeatfilms}
          next={next}
          onMovieLike={onMovieLike}
          onLoadMoreClick={onLoadMore}
          isPreloader={isPreloader}
          moviesRequestError={moviesRequestError}
          isSearchButtonPressed={isSearchButtonPressed}
          isShort={isShort}
          savedMovies={savedMovies}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
