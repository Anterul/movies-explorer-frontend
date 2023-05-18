function MoviesCard(props) {
  function convertToHours(duration) {
    const hour = Math.floor(duration / 60);
    let minute = duration % 60;
    minute = minute < 10 ? "0" + minute : minute;
    return hour + "ч " + minute + "м";
  }
  return (
    <article className="movies-card">
      <img
        className="movies-card__image"
        src={props.movie.image}
        alt={props.movie.nameRU}
      />
      <h2 className="movies-card__name">{props.movie.nameRU}</h2>
      <p className="movies-card__duration">
        {convertToHours(props.movie.duration)}
      </p>
      <button className="movies-card__button" type="button"></button>
    </article>
  );
}

export default MoviesCard;
