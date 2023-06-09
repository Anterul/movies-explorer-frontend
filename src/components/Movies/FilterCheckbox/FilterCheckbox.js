function FilterCheckbox({ isShort, handleIsShort }) {
  function handleShort() {
    handleIsShort();
  }
  return (
    <div className="filter-checkbox">
      <p className="filter-checkbox__text">Короткометражки</p>
      <label className="filter-checkbox__container">
        <input
          className="filter-checkbox__input"
          checked={isShort}
          onChange={handleShort}
          id="short-films"
          type="checkbox"
          name="short-films"
        ></input>
        <span></span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
