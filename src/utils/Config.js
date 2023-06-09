export const BASE_URL = "https://api.explorer.nomoredomains.monster";

export const MOVIES_URL = "https://api.nomoreparties.co/beatfilm-movies";

const ERROR_MESSAGES = {
  EMAIL: {
    INCORRECT: "Некорректный формат электронной почты.",
    EMPTY: "Электронная почта не указана.",
  },
  NAME: {
    TO_SHORT: "Имя должно содержать не менее 2 символов.",
    TO_LONG: "Имя должно содержать не более 20 символов.",
    EMPTY: "Имя не указано.",
  },
  PASSWORD: {
    TO_SHORT: "Пароль должен содержать не менее 4 символов.",
    TO_LONG: "Пароль должен содержать не более 20 символов.",
    EMPTY: "Пароль не указан.",
  },
  VALUES_REPEATED: "Значения полей повторяются.",
  TOOLTIP: {
    ALT: "Запрос на изменение информации",
    SUCCESS: "Вы успешно отредактировали профиль.",
    FAILURE: "Что-то пошло не так! Попробуйте еще раз.",
  },
  MOVIES: {
    REQUEST_ERROR:
      "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.",
    NOTHING: "Ничего не найдено",
  },
};

export default ERROR_MESSAGES;
