var popuplink = document.querySelector(".button-contacts");
var popup = document.querySelector(".popup-close");
var popupClose = popup.querySelector(".button-cross");
var userName = popup.querySelector(".user-name");
var userImail = popup.querySelector(".user-imail");
var form = popup.querySelector(".form-box");
var mandatory = popup.querySelectorAll(".input-content");
console.log(mandatory);

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}


popuplink.addEventListener("click", function () {
    popup.classList.add("popup-show");
    if (storage) {
        userName.value = storage;
        userImail.focus();
      } else {
        userName.focus();
      }
       mandatory.forEach(function(mandatory){
        mandatory.removeAttribute("required");
});
});

popupClose.addEventListener("click", function (evt) {
    
    popup.classList.remove("popup-show");
    popup.classList.remove("popup-error");
  });

form.addEventListener("submit", function (evt) {
    if (!userName.value || !userImail.value) {
        popup.classList.add("popup-error");   
    }
        else {
            if (isStorageSupport) {
                localStorage.setItem("name", userName.value);
              }
        } 
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          if (popup.classList.contains("popup-show")) {
                popup.classList.remove("popup-show");
                popup.classList.remove("popup-error");
          }
        }
      });
    window.onclick = function(event) {
       if (event.target == popup) {
          popup.classList.remove("popup-show");
        }
    }  
