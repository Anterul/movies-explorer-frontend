function Preloader(props) {
  return (
    <div className="preloader">
      {props.postsToRender.length === 0 ||
      props.next >= props.postsToRender.length ? (
        ""
      ) : (
        <button
          className="preloader__button"
          type="button"
          onClick={props.onLoadMoreClick}
        >
          Ещё
        </button>
      )}
    </div>
  );
}

export default Preloader;
