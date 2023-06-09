import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import { React } from "react";
import { Formik } from "formik";
import { ProfileSchema } from "../../utils/YupSchemes";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);

  const [currentName, setCurrentName] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");

  useEffect(() => {
    setCurrentName(currentUser.name);
    setCurrentEmail(currentUser.email);
  }, [currentUser]);

  const isFormValid = (formik) => {
    return !formik.dirty || !formik.isValid;
  };

  function handleExitButton() {
    props.onExitButtonClick();
  }

  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} onMenuClick={props.onMenuClick} />
      <Formik
        enableReinitialize={true}
        initialValues={{ name: currentName, email: currentEmail }}
        validationSchema={ProfileSchema}
        onSubmit={(values) => {
          props.onEditButtonClick(values.name, values.email);
        }}
      >
        {(formik) => (
          <div className="profile">
            <h2 className="profile__title">Привет, {currentUser.name} !</h2>
            <form className="profile__form" onSubmit={formik.handleSubmit}>
              <label className="profile__text-contailer">
                <span className="profile__text">Имя</span>
                <input
                  className="profile__input"
                  type="text"
                  id="name"
                  {...formik.getFieldProps("name")}
                />
                <span className="profile__error-message">
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : null}
                </span>
              </label>
              <label className="profile__text-contailer profile__text-container_email">
                <span className="profile__text">E-mail</span>
                <input
                  className="profile__input"
                  type="email"
                  id="email"
                  {...formik.getFieldProps("email")}
                />
                <span className="profile__error-message">
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : null}
                </span>
              </label>
              <button
                className="profile__button profile__button_type_redact"
                type="submit"
                disabled={isFormValid(formik)}
              >
                Редактировать
              </button>
            </form>

            <button
              className="profile__button profile__button_type_exit"
              type="button"
              onClick={handleExitButton}
            >
              Выйти из аккаунта
            </button>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Profile;
