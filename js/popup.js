var popuplink = document.querySelector(".button-contacts");
var popup = document.querySelector(".popup-close");
var popupClose = popup.querySelector(".button-cross");
var userName = popup.querySelector(".username");

popuplink.addEventListener("click", function () {
    popup.classList.add("popup-show");
    userName.focus();
});
popupClose.addEventListener("click", function (evt) {
    popup.classList.remove("popup-show");
  });
