window.addEventListener("DOMContentLoaded", async () => {
    const nick = JSON.stringify(localStorage.getItem("userNickname"))
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTU2MjM0ODQsImV4cCI6MTcxODMwMTg4NH0.uEQXC_vAF2tMh3hOlyQZ5yxXe5YFLd_0BRSRVlhyiYE"

    const nickname = JSON.parse(nick)
    const api = new API(authToken)
    const result = await api.findUser(nickname)
    const userInfo = JSON.stringify(result.returnedData)
    localStorage.setItem("userInfo", userInfo)
})

const notifies = document.querySelector(".notifications");
const doPosts = document.querySelector(".do-a-post");
const closeModal = document.querySelectorAll("#close-modal");

notifies.addEventListener("click", () => {
    document.querySelector(".modals").style.display = "flex"
    document.querySelector(".notifications-modal").id = "modal-active"
})

doPosts.addEventListener("click", () => {
    document.querySelector(".modals").style.display = "flex"
    document.querySelector(".post-modal").id = "post-modal-active"
})

closeModal.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".modals").style.display = "none"
        document.querySelectorAll(".modal").forEach(item => {
            item.id = ""
        })
    })
})

/*sections*/
const exploreSection = document.querySelector(".explore-section-link");
const feedSection = document.querySelector(".feed-section-link");

exploreSection.addEventListener("click", () => {
    document.querySelector(".explore-section").style.display = "block"
    document.querySelector(".feed-section").style.display = "none"
    document.querySelector(".sidebar-right").id = "sidebar-right-active"
})

feedSection.addEventListener("click", () => {
    document.querySelector(".feed-section").style.display = "block"
    document.querySelector(".explore-section").style.display = "none"
    document.querySelector(".sidebar-right").id = ""
})

// ajustar depois
// const imageInput = document.querySelector('input[type="file"]');
// const modalContent = document.querySelector('.modal-content');

// imageInput.addEventListener('change', function(event) {
//     const file = event.target.files[0];
//     if (file && file.type.startsWith('image/')) {
//         const img = document.createElement('img');
//         img.src = URL.createObjectURL(file);

//         // Remove qualquer imagem anterior, se houver
//         const existingImg = modalContent.querySelector('img');
//         if (existingImg) {
//             modalContent.removeChild(existingImg);
//         }

//         // Adiciona a nova imagem
//         modalContent.appendChild(img);
//     }
// });