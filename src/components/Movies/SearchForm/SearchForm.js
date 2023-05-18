import { useState } from "react";

function SearchForm() {
  const [movie, setMovie] = useState("");
  function handleMovieChange(e) {
    setMovie(e.target.value);
  }
  return (
    <form className="search-form" name="movie" id="movie">
      <input
        className="search-form__input"
        onChange={handleMovieChange}
        id="movie"
        type="text"
        name="movie"
        value={movie}
        placeholder="Фильм"
        required
      ></input>
      <button className="search-form__button" type="submit"></button>
      <div className="search-form__line"></div>
    </form>
  );
}

export default SearchForm;
