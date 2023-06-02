import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email) {
      return;
    }
    props.onEditButtonClick(name, email);
  }

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} onMenuClick={props.onMenuClick} />
      <div className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <label className="profile__text-contailer">
            <span className="profile__text">Имя</span>
            <input
              className="profile__text profile__text_current-user"
              value={name}
              onChange={handleNameChange}
              type="text"
              name="name"
              id="name"
              required
            />
          </label>
          <label className="profile__text-contailer profile__text-container_email">
            <span className="profile__text">E-mail</span>
            <input
              className="profile__text profile__text_current-user"
              value={email}
              onChange={handleEmailChange}
              type="email"
              name="email"
              id="email"
              required
            />
          </label>
          <button
            className="profile__button profile__button_type_redact"
            type="submit"
          >
            Редактировать
          </button>
        </form>

        <button
          className="profile__button profile__button_type_exit"
          type="button"
          onClick={props.onExitButtonClick}
        >
          Выйти из аккаунта
        </button>
      </div>
    </>
  );
}

export default Profile;
