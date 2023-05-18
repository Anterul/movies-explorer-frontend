import { useState } from "react";

function FilterCheckbox() {
  const [checked, setChecked] = useState(true);
  function handleCheck() {
    setChecked(!checked);
  }
  return (
    <div className="filter-checkbox">
      <p className="filter-checkbox__text">Короткометражки</p>
      <label className="filter-checkbox__container">
        <input
          className="filter-checkbox__input"
          checked={checked}
          onChange={handleCheck}
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
