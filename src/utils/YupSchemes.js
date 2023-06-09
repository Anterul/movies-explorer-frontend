import * as Yup from "yup"; // npm install yup --save
import emailRegex from "./RegExps";
import ERROR_MESSAGES from "./Config";

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email(ERROR_MESSAGES.EMAIL.INCORRECT)
    .required(ERROR_MESSAGES.EMAIL.EMPTY)
    .test("Validate Email", ERROR_MESSAGES.EMAIL.INCORRECT, (value) => {
      const RegEx = emailRegex;
      return RegEx.test(String(value).toLowerCase());
    }),
  password: Yup.string()
    .min(4, ERROR_MESSAGES.PASSWORD.TO_SHORT)
    .max(20, ERROR_MESSAGES.PASSWORD.TO_LONG)
    .required(ERROR_MESSAGES.PASSWORD.EMPTY),
});

export const RegisterSchema = Yup.object({
  name: Yup.string()
    .min(2, ERROR_MESSAGES.NAME.TO_SHORT)
    .max(20, ERROR_MESSAGES.NAME.TO_LONG)
    .required(ERROR_MESSAGES.NAME.EMPTY),
  email: Yup.string()
    .email(ERROR_MESSAGES.EMAIL.INCORRECT)
    .required(ERROR_MESSAGES.EMAIL.EMPTY)
    .test("Validate Email", ERROR_MESSAGES.EMAIL.INCORRECT, (value) => {
      const RegEx = emailRegex;
      return RegEx.test(String(value).toLowerCase());
    }),
  password: Yup.string()
    .min(4, ERROR_MESSAGES.PASSWORD.TO_SHORT)
    .max(20, ERROR_MESSAGES.PASSWORD.TO_LONG)
    .required(ERROR_MESSAGES.PASSWORD.EMPTY),
});

export const ProfileSchema = Yup.object({
  name: Yup.string()
    .min(2, ERROR_MESSAGES.NAME.TO_SHORT)
    .max(20, ERROR_MESSAGES.NAME.TO_LONG)
    .required(ERROR_MESSAGES.NAME.EMPTY),
  email: Yup.string()
    .email(ERROR_MESSAGES.EMAIL.INCORRECT)
    .required(ERROR_MESSAGES.EMAIL.EMPTY)
    .test("Validate Email", ERROR_MESSAGES.EMAIL.INCORRECT, (value) => {
      const RegEx = emailRegex;
      return RegEx.test(String(value).toLowerCase());
    }),
});
