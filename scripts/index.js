// @todo: Темплейт карточки

const cardTemplate = document.querySelector("#card-template").content.querySelector(".places__item");

// @todo: DOM узлы

const placesList = document.querySelector('.places__list');


// @todo: Функция создания карточки

function createCard(initialCard, deleteCard) {
    const cardElement = cardTemplate.cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');

    cardTitle.textContent = initialCard.name;
    cardImage.alt = initialCard.name;
    cardImage.src = initialCard.link;

    deleteButton.addEventListener('click', () => deleteCard(cardElement));

    return cardElement;
}

// @todo: Функция удаления карточки

function deleteCard(cardElement) {
    cardElement.remove();
};

// @todo: Вывести карточки на страницу

initialCards.forEach(initialCard => {
    const card = createCard(initialCard, deleteCard);
    placesList.append(card);
});
