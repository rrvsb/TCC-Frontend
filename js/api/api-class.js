class API {
    token;
    constructor(token) {
        this.token = token
    }

    async loginRequest(username, password, email) {
        try {
            const response = await fetch("https://tcc-u2qf.onrender.com/users/login", {
                method: "POST",
                body: JSON.stringify({
                    nickname: username,
                    password: password,
                    email: email
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.token
                }
            });
            
            if (response.ok) {
                window.location.href = "../../html/home/home.html";
            } else {
                const data = await response.json();
                switch (true) {
                    case data.message === "Erro de validação":
                    case data.status === 400 && data.message === "dados do usuario incorretos":
                        if (
                            data.errors[0].constraints.matches &&
                            data.errors[0].constraints.matches.includes("a senha deve conter uma letra maiuscula, uma letra minuscula e um caractere especial")
                        ) {
                            window.location.href = "../../html/login/login.html?error&errorID=153032";
                        } else if (data.errors[0].constraints.isEmail && data.errors[0].constraints.isEmail.includes("Formato de email Invalido")) {
                            window.location.href = "../../html/login/login.html?error&errorID=153031";
                        } else if (
                            data.errors[0].constraints.matches &&
                            data.errors[0].constraints.matches.includes("Formato de email Invalido") &&
                            data.errors[0].constraints.matches.includes("a senha deve conter uma letra maiuscula, uma letra minuscula e um caractere especial")
                        ) {
                            window.location.href = "../../html/login/login.html?error&errorID=153030";
                        }
                        break;

                    case (data.status === 400 && data.message === "Internal Server Error"):
                        window.location.href = "../../html/errors/404-page.html";
                        break;

                    // na proxima vez que o docker for atualizado tem que mudar a data.message aqui de "Internal server error" para "Usuario não encontrado email ou nickname incorretos"
                    case (data.status === 500 && data.message === "Internal Server Error"):
                        window.location.href = "../../html/login/login.html?error&errorID=153034"
                        break;

                    default:
                        window.location.href = "../../html/login/login.html";
                        break;
                }
            }
        } catch (error) {
            return error
        }
    }

    async findUser(username) {
        const url = "https://tcc-u2qf.onrender.com/users/" + username
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.token
            }
        });
        const data = response.json()
        return data
    }
}