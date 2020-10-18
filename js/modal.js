const modalLink = document.querySelector(".modal-link");
const modalPopup = document.querySelector(".modal-popup");
const modalClose = modalPopup.querySelector(".modal-close");
const modalForm = modalPopup.querySelector(".modal__user-form");
const modalName = modalPopup.querySelector(".modal__user-name");
const modalEmail = modalPopup.querySelector(".modal__user-email");

const isStorageSupport = true;
let storage = "";


try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

modalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");

  if (storage) {
    modalName.value = storage;
    modalEmail.focus();
  } else {
    modalName.focus();
  }

});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
  modalPopup.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (evt) {
  if (!modalName.value || !modalEmail.value) {
    evt.preventDefault();
    modalPopup.classList.add("modal-error");
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("text", modalName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-show");
      modalPopup.classList.remove("modal-error");
      modalPopup.offsetWidth = modalPopup.offsetWidth;
      modalPopup.classList.add("modal-error");
    }
  }
});