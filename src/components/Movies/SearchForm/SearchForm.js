import { useState } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({
  executeSearchQuery,
  searchQuery,
  setSearchQuery,
  handleMoviesRequestError,
  handleSearchButton,
  isSearchButtonDisabled,
}) {
  const location = useLocation();

  function handleTextChange(e) {
    if (location.pathname === "/movies") {
      localStorage.setItem(
        "beatfilmsSearchQuery",
        JSON.stringify(e.target.value)
      );
    }
    setSearchQuery(e.target.value);
  }

  const [emptyRequestError, setEmptyRequestError] = useState(false);

  function handleSearchQuery() {
    executeSearchQuery(searchQuery);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleMoviesRequestError();
    handleSearchButton();
    if (!searchQuery) {
      setEmptyRequestError(true);
    } else {
      setEmptyRequestError(false);
      handleSearchQuery();
    }
  }

  return (
    <form
      className="search-form"
      name="movie"
      id="movie"
      onSubmit={handleSubmit}
      noValidate
    >
      <input
        className="search-form__input"
        onChange={handleTextChange}
        id="movie"
        type="text"
        name="movie"
        value={searchQuery}
        placeholder="Фильм"
        required
      />
      <span className="search-form__error-message">
        {emptyRequestError ? "Нужно ввести ключевое слово" : ""}
      </span>
      <button
        className="search-form__button"
        type="submit"
        disabled={isSearchButtonDisabled}
      ></button>
      <div className="search-form__line"></div>
    </form>
  );
}

export default SearchForm;
