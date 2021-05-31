let openButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');

let editProfile = document.querySelector(".profile__edit-button");
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__role');
let popupEdit = document.querySelector("#popup");
let formEditProfile = popupEdit.querySelector(".form");

let popupName = document.querySelector('#popup-name');
let popupStatus = document.querySelector('#popup-role');



function handlePopupEditOpen() {
    openPopup()
    popupName.value = profileName.textContent;
    popupStatus.value = profileStatus.textContent;
}

function handlePopupEditSubmit(evt) {
    evt.preventDefault()
    profileName.textContent = popupName.value;
    profileStatus.textContent = popupStatus.value;
    closePopup()
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