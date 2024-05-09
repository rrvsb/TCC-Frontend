const url = new URLSearchParams(window.location.search);
const room = url.get("room");

const user = localStorage.getItem("userNickname");
const messagesDiv = document.querySelector(".messages");

const socket = io("https://tcc-u2qf.onrender.com", {
    query: { roomName: room }
}); 

const render = (data) => {
    const message = document.createElement("div");
    message.className = "message";

    const infos = document.createElement("div");
    infos.className = "userInChatInfos"

    const content = document.createElement("div");
    content.className = "content"

    const contentText = document.createElement("p");
    contentText.textContent = data.content
    content.appendChild(contentText)

    const profileInChatPic = document.createElement("div");
    profileInChatPic.className = "profileInChatPic"
    profileInChatPic.style = "background-image: url(https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg);"

    const nickname = document.createElement("p")
    nickname.className = "userInChatName"
    nickname.textContent = 'backendErro'

    // Adicione os elementos filhos um por um
    infos.appendChild(profileInChatPic);
    infos.appendChild(nickname);
    message.appendChild(infos);
    message.appendChild(content);

    // Adicione a mensagem ao seu contêiner, como "messages"
    const messagesContainer = document.querySelector(".messages");
    messagesContainer.appendChild(message);
}

const form = document.querySelector(".chatForm");

//ta funcionando é só arrumar o backend pra chamarretornar o author tambemm
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const message = document.querySelector("#messageInput").value;
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    socket.emit("message", {
        author: "quantxz",
        room: room,
        content: message,
        hour: `${hours}:${minutes}:${seconds}`
    })
    console.log(message)

})


const clear = () => {
    messagesDiv.textContent = ""
}

// document.addEventListener("DOMContentLoaded", () => {
//     socket.emit("find_messages", "room0")

//     socket.on("all_ message", (data) => {
//         console.log(data)
//     })
// })

// Receptor de mensagem do servidor
socket.on("message", (data) => {
    console.log(data.content)
    render(data)
});

// clear();