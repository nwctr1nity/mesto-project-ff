const API_BASE_URL = "https://nomoreparties.co/v1/wff-cohort-35";

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const addCardRequest = (cardName, cardLink) =>
  fetch(`${API_BASE_URL}/cards`, {
    method: "POST",
    headers: {
      authorization: "f18713ba-bbac-4c93-bf37-774d16a19733",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: cardName, link: cardLink }),
  }).then(handleResponse);

export const deleteCardRequest = (cardId) =>
  fetch(`${API_BASE_URL}/cards/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: "f18713ba-bbac-4c93-bf37-774d16a19733",
    },
  }).then(handleResponse);

export const changeProfileRequest = (profileName, profileDescription) =>
  fetch(`${API_BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: "f18713ba-bbac-4c93-bf37-774d16a19733",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: profileName, about: profileDescription }),
  }).then(handleResponse);

export const changeAvatarRequest = (inputLink) =>
  fetch(`${API_BASE_URL}/users/me/avatar`, {
    method: "PATCH",
    headers: {
      authorization: "f18713ba-bbac-4c93-bf37-774d16a19733",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ avatar: inputLink }),
  }).then(handleResponse);

export const getProfileRequest = () =>
  fetch(`${API_BASE_URL}/users/me`, {
    headers: {
      authorization: "f18713ba-bbac-4c93-bf37-774d16a19733",
    },
  }).then(handleResponse);

export const getCardsRequest = () =>
  fetch(`${API_BASE_URL}/cards`, {
    headers: {
      authorization: "f18713ba-bbac-4c93-bf37-774d16a19733",
    },
  }).then(handleResponse);

export const deleteLikeRequest = (card) =>
  fetch(`${API_BASE_URL}/cards/likes/${card["_id"]}`, {
    method: "DELETE",
    headers: {
      authorization: "f18713ba-bbac-4c93-bf37-774d16a19733",
    },
  }).then(handleResponse);

export const toggleLikeRequest = (card) =>
  fetch(`${API_BASE_URL}/cards/likes/${card["_id"]}`, {
    method: "PUT",
    headers: {
      authorization: "f18713ba-bbac-4c93-bf37-774d16a19733",
    },
  }).then(handleResponse);

