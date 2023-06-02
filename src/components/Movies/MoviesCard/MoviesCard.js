import { useState } from "react";
import convertToHours from "../../../utils/ConvertToHours";
import { MOVIES_URL } from "../../../utils/Config";

function MoviesCard(props) {
  const [likeButtonIsActive, setLikeButtonIsActive] = useState();
  function handleLikeButton() {
    setLikeButtonIsActive(!likeButtonIsActive);
  }

  function handleDeleteButton() {}

  const [isLiked, setIsLiked] = useState(true);
  return (
    <article className="movies-card">
      <img
        className="movies-card__image"
        src={`https://api.nomoreparties.co/${props.movie.image.url}`}
        alt={props.movie.image.name}
      />
      <h2 className="movies-card__name">{props.movie.nameRU}</h2>
      <p className="movies-card__duration">
        {convertToHours(props.movie.duration)}
      </p>
      {isLiked ? (
        <button
          className="movies-card__delete-button"
          type="button"
          onClick={handleDeleteButton}
        ></button>
      ) : (
        <button
          className={`movies-card__like-button ${
            likeButtonIsActive ? "movies-card__like-button_active" : ""
          }`}
          type="button"
          onClick={handleLikeButton}
        ></button>
      )}
    </article>
  );
}

export default MoviesCard;
