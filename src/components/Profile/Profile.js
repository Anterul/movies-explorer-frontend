import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} onMenuClick={props.onMenuClick} />
      <div className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <div className="profile__text-contailer">
          <p className="profile__text">Имя</p>
          <p className="profile__text profile__text_current-user">
            {currentUser.name}
          </p>
        </div>
        <div className="profile__text-contailer profile__text-container_email">
          <p className="profile__text">E-mail</p>
          <p className="profile__text profile__text_current-user">
            {currentUser.email}
          </p>
        </div>
        <button
          className="profile__button profile__button_type_redact"
          type="button"
        >
          Редактировать
        </button>
        <button
          className="profile__button profile__button_type_exit"
          type="button"
        >
          Выйти из аккаунта
        </button>
      </div>
    </>
  );
}

export default Profile;
