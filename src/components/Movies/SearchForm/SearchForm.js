import { useState, useEffect } from "react";

function SearchForm(props) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleTextChange(e) {
    setSearchQuery(e.target.value);
  }

  const [emptyRequestError, setEmptyRequestError] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      setEmptyRequestError(false);
    }
  }, [searchQuery]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchQuery) {
      setEmptyRequestError(true);
    } else {
      setEmptyRequestError(false);
      props.executeSearchQuery(searchQuery);
    }
    props.resetSetNext();
    setTimeout(() => {
      props.onSearchButtonClick();
    }, 1000);
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
      <button className="search-form__button" type="submit"></button>
      <div className="search-form__line"></div>
    </form>
  );
}

export default SearchForm;
