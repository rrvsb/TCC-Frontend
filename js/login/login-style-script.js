const title = document.querySelector(".title");
const titlePage = document.title;
const ContainerTitle = document.querySelector(".Container-user-title");

const ContainerLink = document.querySelector(".Container-user-link");
const ContainerLoginForm = document.querySelector("#formLogin");
const ContainerRegisterForm = document.querySelector(".formRegister");

const cadastroOuLogin = document.querySelector("#Container-user-link-loginRegister");
const passwordForgot = document.querySelector("#Container-user-link-PasswordForgot");
let registerOrLogin = false;

ContainerLink.addEventListener("click", () => {
    registerOrLogin = !registerOrLogin;
    if (registerOrLogin) {
        ContainerTitle.textContent = "cadastro"
        ContainerLoginForm.style.display = "none"
        ContainerRegisterForm.style.display = "block"
        passwordForgot.style.display = "none"
        cadastroOuLogin.textContent = "login";
        registerOrLogin = true;
    } 
    if (!registerOrLogin) {
        ContainerTitle.textContent = "Login"
        ContainerLoginForm.style.display = "block"
        ContainerRegisterForm.style.display = "none"
        passwordForgot.style.display = "block"
        cadastroOuLogin.textContent = "cadastrar-se";
        registerOrLogin = false;
    }
})

const renderTitle = () => {
    const titleArray = ["C", "o", "d", "e", "S", "a", "v", "v", "i", "y"];
    let index = 0;

    // Clear the current content
    title.textContent = "";

    // Set an interval to add each character
    const intervalId = setInterval(() => {
        if (index < titleArray.length) {

            if (index === 8) {
                title.textContent += titleArray[index];
                setTimeout(() => {
                    // Remove the last character after adding the ninth character
                    title.textContent = title.textContent.slice(0, -1);

                }, 250)
            } else {
                title.textContent += titleArray[index];
            }
            index++;
        } else {
            // Cancel the interval when all characters have been added
            clearInterval(intervalId);
        }
    }, 300);
}

function hideQueryParams() {
    const newURL = window.location.pathname; // Obtém apenas o caminho da URL
    window.history.replaceState({}, document.title, newURL); // Atualiza a URL sem adicionar ao histórico
}

window.addEventListener("blur", () => {
    document.title = "Esperamos que volte 😥"
})

window.addEventListener("focus", () => {
    document.title = titlePage
})


hideQueryParams();
renderTitle();
