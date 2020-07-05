var popuplink = document.querySelector(".button-contacts");
var popup = document.querySelector(".popup-container");
var popupClose = popup.querySelector(".button-cross");
var userName = popup.querySelector(".user-name");
var userEmail = popup.querySelector(".user-email");
var form = popup.querySelector(".form-box");
var mandatory = popup.querySelectorAll(".input-content");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}


popuplink.addEventListener("click", function () {
  popup.classList.add("popup-container—show");
  mandatory.forEach(function (mandatory) {
    mandatory.removeAttribute("required");
  });
  if (storage) {
    userName.value = storage;
    userEmail.focus();
  } else {
    userName.focus();
  }
});

popupClose.addEventListener("click", function (evt) {

  popup.classList.remove("popup-container—show");
  popup.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", userName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup-container—show")) {
      popup.classList.remove("popup-container—show");
      popup.classList.remove("popup-error");
    }
  }
});

