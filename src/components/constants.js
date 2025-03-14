// Файл с узлами
export {
    cardTemplate,
    placesList,
    profileEditButton,
    newCardButton,
    closeButtons,
    popupProfile,
    popupProfileForm,
    popupProfileNameInput,
    popupProfileDescriptionInput,
    profileName,
    profileDescription,
    popupCard,
    popupCardImage,
    popupCardName,
    popupAddCard,
    popupAddCardForm,
    popupAddCardNameInput,
    popupAddCardLinkInput,
    popupsList
};

// Шаблон карточки
const cardTemplate = document.querySelector("#card-template").content.querySelector(".places__item");

// Секция с карточками
const placesList = document.querySelector('.places__list');

// Кнопочки
const profileEditButton = document.querySelector(".profile__edit-button");
const newCardButton = document.querySelector(".profile__add-button");
const closeButtons = document.querySelectorAll(".popup__close");

// Попапы
const popupCard = document.querySelector(".popup_type_image");
const popupCardImage = document.querySelector(".popup__image");
const popupCardName = document.querySelector(".popup__caption");
const popupAddCard = document.querySelector(".popup_type_new-card");
const popupAddCardForm = document.forms["new-place"];
const popupAddCardNameInput = popupAddCardForm.elements["place-name"];
const popupAddCardLinkInput = popupAddCardForm.elements.link;
const popupsList = document.querySelectorAll(".popup");
const popupProfile = document.querySelector(".popup_type_edit");
const popupProfileForm = document.forms["edit-profile"];
const popupProfileNameInput = popupProfileForm.elements.name;
const popupProfileDescriptionInput = popupProfileForm.elements.description;
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
