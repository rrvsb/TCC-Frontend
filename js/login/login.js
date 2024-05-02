const userInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const emailInput = document.querySelector("#email");
const submitInput = document.querySelector("#submit");
const form = document.querySelector("#formLogin");
const emailErrorElement = document.querySelector("#emailError");
const passwordErrorElement = document.querySelector("#passwordError");
const usernameErrorElement = document.querySelector("#usernameError");
const rememberMe = document.querySelector(".lembrarDeMimInput");

//criar uma classe para ler os erros
const url = new URLSearchParams(window.location.search);
const errorId = url.get("errorID");

window.addEventListener("DOMContentLoaded", () => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData && userData.username && userData.email && userData.password && !window.location.href.includes("errorID")) {
        window.location.href = `../../html/login/login-validation.html?username=${userData.username}&password=${userData.password}&email=${userData.email}`;
    }
});

rememberMe.addEventListener("change", () => {
    if (rememberMe.checked) {
        const userData = {
            username: userInput.value,
            password: passwordInput.value,
            email: emailInput.value
        };
        localStorage.setItem("userData", JSON.stringify(userData));
    }
});
switch (true) {
    case errorId === "153032":
        passwordErrorElement.textContent = "Senha invalida";
        passwordErrorElement.style.display = "block"
        break;
    case errorId === "153031":
        emailErrorElement.textContent = "Email Invalido";
        emailErrorElement.style.display = "block";
        break;
    case errorId === "153030":
        passwordErrorElement.textContent = "Senha e email invalidos";
        passwordErrorElement.style.display = "block"
        emailErrorElement.textContent = "Senha e email invalidos";
        emailErrorElement.style.display = "block";
        break;
    case errorId === "153034":
        usernameErrorElement.textContent = "Usuario ou email invalidos";
        usernameErrorElement.style.display = "block"
        emailErrorElement.textContent = "Usuario ou email invalidos";
        emailErrorElement.style.display = "block";
        break;
    default:
        break;
}

form.addEventListener("input", () => {
    const isUserValid = userInput.value.length >= 7 && userInput.value.length <= 55;
    const isPasswordValid = passwordInput.value.length >= 7 && passwordInput.value.length <= 55;
    const isEmailValid = emailInput.value.length >= 7 && emailInput.value.length <= 55;

    if (isUserValid && isPasswordValid && isEmailValid) {
        submitInput.disabled = false;
    } else {
        submitInput.disabled = true;
    }
});

