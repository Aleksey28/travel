const header = document.querySelector('.header');
const linkOpenPopup = header.querySelector('.header__link_open-popup');

const popupAboutProject = document.querySelector('.popup');
const popupAboutProjectBtnClose = popupAboutProject.querySelector('.popup__close');
const popupIllustration = popupAboutProject.querySelector('.popup__illustration');
const popupOpenIllustration = popupAboutProject.querySelector('.popup__open-illustration');

const openPopup = (popupToOpen) => {
  popupToOpen.classList.add('popup_opend');
}

const closePopup = (popupToClose) => {
  popupToClose.classList.remove('popup_opend');
}

const togglePopupIllustration = () => {
  popupIllustration.classList.toggle('popup__illustration_opend');
}

linkOpenPopup.addEventListener('click', (evt) => {
  evt.preventDefault();
  openPopup(popupAboutProject);
});

popupAboutProjectBtnClose.addEventListener('click', () => {
  closePopup(popupAboutProject);
});

popupOpenIllustration.addEventListener('click', togglePopupIllustration);
