const API_BASE_URL = "https://nomoreparties.co/v1/wff-cohort-35";

// универсальный объект для хранения заголовков
const HEADERS = {
  authorization: "f18713ba-bbac-4c93-bf37-774d16a19733",
  "Content-Type": "application/json",
};

// универсальная функция для отправки запросов
const sendRequest = (uri, options = {}) => {
  return fetch(`${API_BASE_URL}${uri}`, {
    headers: HEADERS,
    ...options, // автоматическая проверка параметров
  }).then(handleResponse);
};

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const addCardRequest = (cardName, cardLink) =>
  sendRequest("/cards", {
    method: "POST",
    body: JSON.stringify({ name: cardName, link: cardLink }),
  });

export const deleteCardRequest = (cardId) =>
  sendRequest(`/cards/${cardId}`, { method: "DELETE" });

export const changeProfileRequest = (profileName, profileDescription) =>
  sendRequest("/users/me", {
    method: "PATCH",
    body: JSON.stringify({ name: profileName, about: profileDescription }),
  });

export const changeAvatarRequest = (inputLink) =>
  sendRequest("/users/me/avatar", {
    method: "PATCH",
    body: JSON.stringify({ avatar: inputLink }),
  });

export const getProfileRequest = () => sendRequest("/users/me");

export const getCardsRequest = () => sendRequest("/cards");

export const deleteLikeRequest = (card) =>
  sendRequest(`/cards/likes/${card["_id"]}`, { method: "DELETE" });

export const toggleLikeRequest = (card) =>
  sendRequest(`/cards/likes/${card["_id"]}`, { method: "PUT" });