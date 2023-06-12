import { React } from "react";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import { LoginSchema } from "../../utils/YupSchemes";

export const Login = (props) => {
  const isFormValid = (formik) => {
    return formik.isValid && Object.keys(formik.touched).length > 0;
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        props.onSignIn(values.email, values.password);
      }}
    >
      {(formik) => (
        <div className="login">
          <NavLink className="login__logo" to="/"></NavLink>
          <h2 className="login__title">Рады видеть !</h2>

          <form className="login__form" onSubmit={formik.handleSubmit}>
            <div className="login__input-container">
              <label className="login__label">E-mail</label>
              <input
                className="login__input"
                type="email"
                id="email"
                {...formik.getFieldProps("email")}
              />
              <span className="login__error-message">
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null}
              </span>
            </div>
            <div className="login__input-container">
              <label className="login__label">Пароль</label>
              <input
                className="login__input"
                type="password"
                id="password"
                {...formik.getFieldProps("password")}
              />
              <span className="login__error-message">
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null}
              </span>
            </div>
            <button
              className="login__submit-button"
              type="submit"
              disabled={!isFormValid(formik)}
            >
              Войти
            </button>
          </form>
          <p className="login__link-text">
            Ещё не зарегистрированы?
            <NavLink className="login__link" to="/signup">
              Регистрация
            </NavLink>
          </p>
        </div>
      )}
    </Formik>
  );
};

export default Login;
