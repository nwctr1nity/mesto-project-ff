export { openPopup, closePopup, closePopupEscape, closePopupOverlay }

function openPopup(popup) {
    popup.classList.add("popup_is-animated");
    setTimeout(function() {
        popup.classList.add("popup_is-opened");
    }, 0);
    document.addEventListener("keydown", closePopupEscape);
}

function closePopup(popup) {
    popup.classList.remove("popup_is-opened");
    setTimeout(function() {
        popup.classList.remove("popup_is-animated");
    }, 500);
    document.removeEventListener("keydown", closePopupEscape);
}

function closePopupOverlay(evt) {
    if (evt.target.classList.contains("popup_is-opened")) {
        closePopup(evt.target);
    }
}

function closePopupEscape(evt) {
    if (evt.key === "Escape" && document.querySelector(".popup_is-opened")) {
        closePopup(document.querySelector(".popup_is-opened"));
    }
}
