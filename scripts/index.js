// @todo: Темплейт карточки

// @todo: DOM узлы

const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки

function addCard(initialCard, removeCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__title').textContent = initialCard.name;
    cardElement.querySelector('.card__image').src = initialCard.link;
    cardElement.querySelector('.card__image').alt = initialCard.name;
    
    placesList.append(cardElement);
}

// @todo: Функция удаления карточки

placesList.addEventListener('click', function(event) {
    if (event.target.classList.contains('card__delete-button')) {
        const cardToRemove = event.target.closest('.card');
        cardToRemove.remove();
    }
});

// @todo: Вывести карточки на страницу

initialCards.forEach(addCard);
