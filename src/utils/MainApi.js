import { BASE_URL } from "../utils/Config";

function getResponseData(response) {
  if (!response.ok) {
    return Promise.reject(`Ошибка: ${response.status}`);
  }
  return response.json();
}

function request(url, options) {
  return fetch(`${BASE_URL}${url}`, options).then(getResponseData);
}

function getToken() {
  const token = localStorage.getItem("jwt");
  return token;
}

export function register(name, email, password) {
  return request("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
}

export function login(email, password) {
  return request(`/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
}

export function checkToken(token) {
  return request(`/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getUserInfo() {
  return request("/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

export function changeUserInfo(name, email) {
  return request("/users/me", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  });
}
