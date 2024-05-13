const registerForm = document.querySelector(".formRegister")

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA1MDU3OTQsImV4cCI6MTcxMzE4NDE5NH0.lX_TJ9n2iUg7lL0UHsg2aVY9XJErj1yYZ6RBS41s2GA";
    const name = document.querySelector("#nome").value
    const surname = document.querySelector("#sobrenome").value
    const nickname = document.querySelector("#nickname").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const confirmPassword = document.querySelector("#confirmarSenha").value
    
    if (name !== "" && password !== "" && email !== "" && surname !== "" && nickname !== "" && password === confirmPassword) {
        try {
            const response = await fetch("https://tcc-u2qf.onrender.com/users/register", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    surname,
                    email,
                    password,
                    nickname
                  }),     
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": authToken
                }
            });

            const data = await response.json();
            console.log(data)
        } catch (error) {
            console.error("Erro na requisição:", error);
            // Lidar com erro na requisição
        }
    }
})





