import { toggleLikeRequest, deleteLikeRequest } from "./api.js";

export function toggleLike(evt, cardData, cardElement) {
    const likeButton = evt.target;
    const likeCounter = cardElement.querySelector(".card__like-counter");

    const likeAction = likeButton.classList.contains("card__like-button_is-active") 
        ? deleteLikeRequest(cardData) 
        : toggleLikeRequest(cardData);

    likeAction
        .then((updatedCard) => {
            likeButton.classList.toggle("card__like-button_is-active");
            likeCounter.textContent = updatedCard.likes.length;
        })
        .catch(console.error);
}

export function createCard(cardData, deleteCard, likeCard, viewImage, cardTemplate, userId) {
    const cardElement = cardTemplate.cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');
    const likeButton = cardElement.querySelector('.card__like-button');
    const likeCounter = cardElement.querySelector('.card__like-counter');

    likeCounter.textContent = cardData.likes.length; 
    cardTitle.textContent = cardData.name;
    
    cardImage.alt = cardData.name;
    cardImage.src = cardData.link;

    if (cardData.likes.some(like => like._id === userId)) {
        likeButton.classList.add("card__like-button_is-active");
    }

    if (cardData.owner._id !== userId) {
        deleteButton.style.display = "none";
    } else {
        deleteButton.addEventListener('click', () => deleteCard(cardData._id, cardElement));
    }

    likeButton.addEventListener('click', (evt) => likeCard(evt, cardData, cardElement));
    cardImage.addEventListener('click', () => viewImage(cardData));

    return cardElement;
}