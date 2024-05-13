window.addEventListener("DOMContentLoaded", async () => {
    const nick = JSON.stringify(localStorage.getItem("userNickname"))
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTU2MjM0ODQsImV4cCI6MTcxODMwMTg4NH0.uEQXC_vAF2tMh3hOlyQZ5yxXe5YFLd_0BRSRVlhyiYE"

    const nickname = JSON.parse(nick)
    const api = new API(authToken)
    const result = await api.findUser(nickname) 
    const userInfo = JSON.stringify(result.returnedData)
    localStorage.setItem("userInfo", userInfo)
})