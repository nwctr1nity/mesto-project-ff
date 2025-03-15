export function toggleLike(evt) {
    evt.target.classList.toggle("card__like-button_is-active");
}

export function createCard(cardData, deleteCard, likeCard, viewImage, cardTemplate) {
    const cardElement = cardTemplate.cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');
    const likeButton = cardElement.querySelector('.card__like-button');

    cardTitle.textContent = cardData.name;
    cardImage.alt = cardData.name;
    cardImage.src = cardData.link;

    deleteButton.addEventListener('click', () => deleteCard(cardElement));
    likeButton.addEventListener('click', likeCard);
    cardImage.addEventListener('click', () => viewImage(cardData));

    return cardElement;
}

export function deleteCard(cardElement) {
    cardElement.remove();
}
