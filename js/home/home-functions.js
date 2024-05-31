const postForm = document.querySelector('.postForm');
const apiClass = new API();
const functions = new HomeFunctions();

document.addEventListener("DOMContentLoaded", async () => {
    const posts  = await apiClass.PostFind();
    functions.postsGenerator(posts).next();
    const likesInput = document.querySelectorAll('.checkbox');
    likesInput.forEach(input => {
        input.addEventListener('change', (e) => {
            const postElement = e.target.closest('.post'); // Encontra o elemento pai com a classe 'post'
            const title = postElement.querySelector('.title').textContent; // Recupera o título do post
            const content = postElement.querySelector('.post-content p:last-child').textContent; // Recupera o conteúdo do post
            const userNickname = postElement.querySelector('.post-profile-infos p:last-child').textContent.slice(1); // Recupera o nickname do usuário
            const metadata = postElement.getAttribute('metadata'); // Obtém o valor do atributo 'metadata'
            const metadataObj = JSON.parse(metadata); // Converte a string JSON em um objeto JavaScript
            const id = metadataObj.id; // Obtém o ID da metadata

            //atualizar em tempo real os likes e dar um jeito do mesmo usuario não poder dar like duas vezes
            
            const data = {
                id,
                title,
                content,
                userNickname
            }

            if (e.target.checked) {
                apiClass.PostLike(data); // Envia os dados para a função PostLike
            } else {
                apiClass.PostUnlike(data); // Envia os dados para a função PostUnlike
            }
        });
    });
})


postForm.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const data = {
        title: document.querySelector('#title').value,
        content: document.querySelector('#input-modal-post-content').value,
        userNickname: localStorage.getItem("userNickname")
    };

    const fileInput = document.querySelector('#file-input'); 
    const file = fileInput.files[0];

    await apiClass.Post(data, file);
})