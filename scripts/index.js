let openButton = document.querySelector('profile__edit-button');
let popup = document.querySelector('popup');
let closePopup = document.querySelector('popup__close');
let savePopup = document.querySelector('form__save');

let profileName = document.querySelector('.profile__name');
let popupName = document.querySelector('popup__name');
let profileStatus = document.querySelector('profile__role');
let popupStatus = document.querySelector('popup__role');

function handlePopupEditOpen() {
    openPopup(popupEdit)
    popupName.value = profileName.textContent;
    popupStatus.value = profileStatus.textContent;
}

function handlePopupEditSubmit(evt) {
    evt.preventDefault()
    profileName.textContent = popupName.value;
    profileStatus.textContent = popupStatus.value;
    closePopup(popupEdit)
}

function openPopup() {
    popup.classList.add('popup_opened');
}
openButton.addEventListener('click', openPopup);

function closePopup() {
    popup.classList.remove('popup_opened')
}

formEditProfile.addEventListener("submit", handlePopupEditSubmit);
closeButton.addEventListener('click', closePopup);
editProfile.addEventListener("click", handlePopupEditOpen);