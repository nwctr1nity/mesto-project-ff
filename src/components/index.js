import '../pages/index.css';
import { openPopup, closePopup, closePopupOverlay } from "./modal.js";
import { 
    cardTemplate, placesList, profileEditButton, newCardButton, popupProfile,
    popupProfileForm, popupProfileNameInput, popupProfileDescriptionInput, popupAvatar, popupAvatarForm, popupAvatarInput,
    profileName, profileImage, profileDescription, profileAvatarButton, popupCard, popupCardImage, popupCardName,
    closeButtons, popupAddCard, popupAddCardForm, popupAddCardNameInput, 
    popupAddCardLinkInput, popupsList, validationConfig, popupDeleteCard, popupDeleteCardForm
} from './constants.js';
import { addCardRequest, changeProfileRequest, changeAvatarRequest, getProfileRequest, getCardsRequest, deleteCardRequest } from "./api.js";
import { createCard, toggleLike } from './card.js';
import { enableValidation, clearValidation } from './validation.js';

let userId = "";
let cardToDelete = null;
let cardIdToDelete = null;

// получаем карточки и данные профиля
Promise.all([getProfileRequest(), getCardsRequest()])
    .then(([userData, cards]) => {
        userId = userData._id;

        profileName.textContent = userData.name;
        profileDescription.textContent = userData.about;
        document.querySelector('.profile__image').style.backgroundImage = `url(${userData.avatar})`;

        cards.forEach(cardData => {
            const cardElement = createCard(
                cardData, 
                () => openDeleteCardPopup(cardData._id, cardElement), 
                (evt) => toggleLike(evt, cardData, cardElement), 
                openImagePopup, 
                cardTemplate, 
                userId
            );
            placesList.append(cardElement);
        });
    })
    .catch(console.error);

// включаем валидацию форм
enableValidation(validationConfig);

// величайшее улучшение user expirience
function setButtonLoading(button, isLoading, loadingText = "Сохранение...") {
    if (!button) return;
    if (isLoading) {
        button.dataset.defaultText = button.dataset.defaultText || button.textContent;
        button.textContent = loadingText;
    } else {
        button.textContent = button.dataset.defaultText;
    }
    button.disabled = isLoading; // выключаем кнопку чтоб не отправить лишних запросов
}

// функция открытия попапа с изображением
function openImagePopup(cardData) {
    popupCardImage.src = cardData.link;
    popupCardImage.alt = cardData.name;
    popupCardName.textContent = cardData.name;
    openPopup(popupCard);
}

// функция открытия попапа с подтверждением удаления
function openDeleteCardPopup(cardId, cardElement) {
    cardToDelete = cardElement;
    cardIdToDelete = cardId;
    openPopup(popupDeleteCard);
}

// обработчик удаления карточки
popupDeleteCardForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    if (!cardToDelete || !cardIdToDelete) return;

    const submitButton = popupDeleteCardForm.querySelector(".popup__button");
    setButtonLoading(submitButton, true, "Удаление...");

    deleteCardRequest(cardIdToDelete)
        .then(() => {
            cardToDelete.remove();
            closePopup(popupDeleteCard);
        })
        .catch(console.error)
        .finally(() => {
            setButtonLoading(submitButton, false);
        });
});

// обработчик добавления новой карточки
popupAddCardForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    const name = popupAddCardNameInput.value;
    const link = popupAddCardLinkInput.value;
    const submitButton = popupAddCardForm.querySelector(".popup__button");

    setButtonLoading(submitButton, true);

    addCardRequest(name, link)
        .then(cardData => {
            const cardElement = createCard(
                cardData,
                () => openDeleteCardPopup(cardData._id, cardElement),
                (evt) => toggleLike(evt, cardData, cardElement),
                openImagePopup,
                cardTemplate,
                userId
            );

            placesList.prepend(cardElement);
            closePopup(popupAddCard);
            popupAddCardForm.reset();
        })
        .catch(console.error)
        .finally(() => {
            setButtonLoading(submitButton, false);
        });
});

// очистка форм перед открытием попапов
profileEditButton.addEventListener("click", () => {
    popupProfileNameInput.value = profileName.textContent;
    popupProfileDescriptionInput.value = profileDescription.textContent;
    clearValidation(popupProfileForm, validationConfig);
    openPopup(popupProfile);
});

newCardButton.addEventListener("click", () => {
    popupAddCardForm.reset();
    clearValidation(popupAddCardForm, validationConfig);
    openPopup(popupAddCard);
});

profileAvatarButton.addEventListener("click", () => {
    popupAvatarForm.reset();
    clearValidation(popupAvatarForm, validationConfig);
    openPopup(popupAvatar);
});

// закрытие попапов по кнопке и клику на оверлей
popupsList.forEach(item => item.addEventListener("mousedown", closePopupOverlay));
closeButtons.forEach(item => {
    const popup = item.closest(".popup");
    item.addEventListener("click", () => closePopup(popup));
});

// смена аватара
popupAvatarForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    const avatarLink = popupAvatarInput.value;
    const submitButton = popupAvatarForm.querySelector(".popup__button");

    setButtonLoading(submitButton, true);

    changeAvatarRequest(avatarLink)
        .then((updatedUserData) => {
            profileImage.style.backgroundImage = `url(${updatedUserData.avatar})`;
            closePopup(popupAvatar);
        })
        .catch(console.error)
        .finally(() => {
            setButtonLoading(submitButton, false);
        });
});

// смена никнейма
popupProfileForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    const newName = popupProfileNameInput.value;
    const newAbout = popupProfileDescriptionInput.value;
    const submitButton = popupProfileForm.querySelector(".popup__button");

    setButtonLoading(submitButton, true);

    changeProfileRequest(newName, newAbout)
        .then((updatedUserData) => {
            profileName.textContent = updatedUserData.name;
            profileDescription.textContent = updatedUserData.about;
            closePopup(popupProfile);
        })
        .catch(console.error)
        .finally(() => {
            setButtonLoading(submitButton, false);
        });
});
