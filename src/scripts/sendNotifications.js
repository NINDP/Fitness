let button = document.querySelector(".send");
let name = document.querySelector(".name");
let phoneNumber = document.querySelector(".phone");
let email = document.querySelector(".email-input");

button.addEventListener('click', sendMessage);

function sendMessage() {
    if (!name.value) {
        alert("Введите имя!");
    } else if (!phoneNumber.value) {
        alert("Введите номер телефона!");
    } else if (!email.value) {
      alert("Введите email!");
    } else {
        alert("Вы успешно ввели данные!");
        name.value = ""
        phoneNumber.value = "";
        email.value = "";
    }
}