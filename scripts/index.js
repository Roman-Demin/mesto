let openPopup = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close')
let savePopup = document.querySelector('.popup__save')

let profileName = document.querySelector('.profile__name')
let popupName = document.querySelector('.popup__name')
let profileStatus = document.querySelector('.profile__role')
let popupStatus = document.querySelector('.popup__role')

function activePopup() {
    popupName.value = profileName.textContent;
    popupStatus.value = profileStatus.textContent;
    popup.classList.add('.popup_opened')
}

function closePopupForm() {
    popup.classList.remove('.popup_opened')
}

function savePopupChanges(submit) {
    submit.preventDefault();
    profileName.value = popupName.textContent;
    profileStatus.value = popupStatus.textContent;
    closePopupForm();
}

openPopup.addEventListener('click', activePopup);
closePopup.addEventListener('click', closePopupForm);
savePopup.addEventListener('submit', savePopupChanges);