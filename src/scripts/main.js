const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const modal = document.querySelector('.modal');
const popup = document.querySelector('.modal__inner');
const openPopupButton = document.querySelector('.intro__btn');
const closePopupButton = document.querySelector('.modal__close');
const form = document.getElementById('modal-form');
const inputs = document.querySelectorAll('.modal-form__input');
const inputName = document.querySelector('.modal-form__input-name');
const inputTel = document.querySelector('.modal-form__input-tel');
const successMessage = document.querySelector('.message-success');
const errorMessage = document.querySelector('.message-error');
const isEscapeKey = (evt) => evt.key === 'Escape';

const checkCommentsLength = (value) => value.length <= MAX_STRING_LENGTH;

const openmenuNav = (evt) => {
  evt.preventDefault();
  header.classList.toggle('header--open');
  nav.classList.toggle('nav--animate');
};

burger.addEventListener('click', openmenuNav);

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

const onPopupCloseButtonClick = () => {
  closePopup();
};

const onWindowCloseByClick = (evt) => {
  closePopupByClick(evt);
};

function closePopupByClick(evt) {
  if (evt.target === modal) {
    closePopup();
  }
}

function closePopup() {
  modal.classList.remove('modal--active');
  popup.classList.remove('modal__inner--active');
  inputs.forEach(input => {
    input.classList.remove('input-error');
  });
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onPopupCloseButtonClick);
  document.removeEventListener('click', onWindowCloseByClick);
  successMessage.style.display = 'none';
  errorMessage.style.display = 'none';
  form.removeAttribute('style');
  form.reset();
}

function openPopup(evt) {
  evt.preventDefault();
  modal.classList.add('modal--active');
  popup.classList.add('modal__inner--active');
  closePopupButton.addEventListener('click', onPopupCloseButtonClick);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onWindowCloseByClick);
}

openPopupButton.addEventListener('click', openPopup);


inputTel.addEventListener('input', function (evt) {
  const validValue = evt.target.value.replace(/[^0-9\s]/g, '');
  this.value = validValue;
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let phoneValue = inputTel.value;
  let nameValue = inputName.value;
  let emptyInputs = Array.from(inputs).filter((input) => input.value === '');

  inputs.forEach((input) => {
    if (input.value === '') {
      input.classList.add('input-error');
    } else {
      input.classList.remove('input-error');
    }
  });

  if (emptyInputs.length !== 0) {
    return false;
  }

  let formData = {
    name: nameValue,
    tel: phoneValue
  };

  sendRequest(formData)
  .then((data) => {
    console.log(data);
    successMessage.style.display = 'block';
    form.style.display = 'none';
  })
  .catch((error) => {
    console.error(error);
    errorMessage.style.display = 'block';
    form.style.display = 'none';
  });
});
