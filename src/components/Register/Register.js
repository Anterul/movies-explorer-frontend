import { React } from "react";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import { RegisterSchema } from "../../utils/YupSchemes";

const Register = (props) => {
  const isFormValid = (formik) => {
    return formik.isValid && Object.keys(formik.touched).length > 0;
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegisterSchema}
      onSubmit={(values) => {
        props.onSignUp(values.name, values.email, values.password);
      }}
    >
      {(formik) => (
        <div className="register">
          <NavLink className="register__logo" to="/"></NavLink>
          <h2 className="register__title">Добро пожаловать!</h2>
          <form className="register__form" onSubmit={formik.handleSubmit}>
            <div className="register__input-container">
              <label className="register__label">Имя</label>
              <input
                className="register__input"
                type="text"
                id="name"
                {...formik.getFieldProps("name")}
              />
              <span className="register__error-message">
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : null}
              </span>
            </div>

            <div className="register__input-container">
              <label className="register__label">E-mail</label>
              <input
                className="register__input"
                type="email"
                id="email"
                {...formik.getFieldProps("email")}
              />
              <span className="register__error-message">
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null}
              </span>
            </div>
            <div className="register__input-container">
              <label className="register__label">Пароль</label>
              <input
                className="register__input"
                type="password"
                id="password"
                {...formik.getFieldProps("password")}
              />
              <span className="register__error-message">
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null}
              </span>
            </div>
            <button
              className="register__submit-button"
              type="submit"
              disabled={!isFormValid(formik)}
            >
              Зарегистрироваться
            </button>
          </form>
          <p className="register__link-text">
            Уже зарегистрированы?
            <NavLink className="register__link" to="/signin">
              Войти
            </NavLink>
          </p>
        </div>
      )}
    </Formik>
  );
};

export default Register;
