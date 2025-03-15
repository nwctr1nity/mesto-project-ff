import '../pages/index.css';
import initialCards from './cards.js';
import { openPopup, closePopup, closePopupOverlay } from "./modal.js";
import { 
    cardTemplate, placesList, profileEditButton, newCardButton, popupProfile,
    popupProfileForm, popupProfileNameInput, popupProfileDescriptionInput, 
    profileName, profileDescription, popupCard, popupCardImage, popupCardName,
    closeButtons, popupAddCard, popupAddCardForm, popupAddCardNameInput, 
    popupAddCardLinkInput, popupsList 
} from './constants.js';
import { createCard, deleteCard, toggleLike } from './card.js';
import avatar from '../images/avatar.jpg';
document.querySelector('.profile__image').style.backgroundImage = `url(${avatar})`;

// Функция обработки клика по изображению
function openImagePopup(cardData, popupCardImage, popupCardName, popupCard) {
    popupCardImage.src = cardData.link;
    popupCardImage.alt = cardData.name;
    popupCardName.textContent = cardData.name;

    openPopup(popupCard);
}

// Попап редактирования профиля
profileEditButton.addEventListener("click", function() {
    popupProfileNameInput.value = profileName.textContent;
    popupProfileDescriptionInput.value = profileDescription.textContent;
    openPopup(popupProfile);
});

// Сохранение изменений профиля
popupProfileForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    profileName.textContent = popupProfileNameInput.value;
    profileDescription.textContent = popupProfileDescriptionInput.value;
    closePopup(popupProfile);
});

// Попап добавления карточки
newCardButton.addEventListener("click", function() {
    popupAddCardForm.reset();
    openPopup(popupAddCard);
});

// Закрытие попапов по клику на оверлей
popupsList.forEach(function(item) {
    item.addEventListener("mousedown", closePopupOverlay);
});

// Закрытие попапов по кнопке
closeButtons.forEach(function(item) {
    const popup = item.closest(".popup");
    item.addEventListener("click", function() {
        closePopup(popup);
    });
});

// Добавление новой карточки
popupAddCardForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const name = popupAddCardNameInput.value;
    const link = popupAddCardLinkInput.value;

    const newCard = createCard(
        { name, link },
        deleteCard,
        toggleLike,
        function(cardData) {
            openImagePopup(cardData, popupCardImage, popupCardName, popupCard);
        },
        cardTemplate
    );

    placesList.prepend(newCard);

    closePopup(popupAddCard);
});

// Рендер начальных карточек
initialCards.forEach(function(initialCard) {
    const card = createCard(
        initialCard,
        deleteCard,
        toggleLike,
        function(cardData) {
            openImagePopup(cardData, popupCardImage, popupCardName, popupCard);
        },
        cardTemplate
    );

    placesList.append(card);
});
