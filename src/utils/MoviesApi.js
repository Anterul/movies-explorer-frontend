import { MOVIES_URL } from "../utils/Config";

function getResponseData(response) {
  if (!response.ok) {
    return Promise.reject(`Ошибка: ${response.status}`);
  }
  return response.json();
}

export function getMovies() {
  return fetch(MOVIES_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(getResponseData);
}
