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
    popupAvatar,
    popupAvatarForm,
    popupAvatarInput,
    profileName,
    profileImage,
    profileDescription,
    profileAvatarButton,
    popupCard,
    popupCardImage,
    popupCardName,
    popupAddCard,
    popupAddCardForm,
    popupAddCardNameInput,
    popupAddCardLinkInput,
    popupsList,
    validationConfig,
    popupDeleteCard,
    popupDeleteCardForm
};

// Шаблон карточки
const cardTemplate = document.querySelector("#card-template").content.querySelector(".places__item");

// Секция с карточками
const placesList = document.querySelector('.places__list');

// Кнопочки
const profileAvatarButton = document.querySelector(".profile__image");
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
const popupDeleteCard = document.querySelector(".popup__delete-card");
const popupDeleteCardForm = popupDeleteCard.querySelector(".popup__form");
const popupsList = document.querySelectorAll(".popup");
const popupProfile = document.querySelector(".popup_type_edit");
const popupProfileForm = document.forms["edit-profile"];
const popupProfileNameInput = popupProfileForm.elements.name;
const popupProfileDescriptionInput = popupProfileForm.elements.description;
const popupAvatar = document.querySelector(".popup__avatar"); 
const popupAvatarForm = document.forms["set-avatar"];
const popupAvatarInput = popupAvatarForm.elements.link;
const profileName = document.querySelector(".profile__title");
const profileImage = document.querySelector(".profile__image");
const profileDescription = document.querySelector(".profile__description");

// конфиг валидации
const validationConfig = {
    errorSelector: 'popup__error-visible',
    inputErrorSelector: 'popup__input-error',
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    popupButtonSelector: '.popup__button',
    disabledButtonSelector: 'popup__button-disabled',
};