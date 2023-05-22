function Preloader(props) {
  return (
    <div className="preloader">
      <button
        className="preloader__button"
        type="button"
        onClick={props.onLoadMoreClick}
      >
        Ещё
      </button>
    </div>
  );
}

export default Preloader;
