// const btnLike = document.querySelector('like-btn');
// const addComentario = document.querySelector('add-comment');
// const btnAddComentario = document.querySelector('add-comment-btn');


document.addEventListener('DOMContentLoaded', function () {
    const likeBtn = document.querySelector('.like-btn');
    const likeCount = document.querySelector('.like-count');
    const postImage = document.querySelector('.post-image');
    const commentsContainer = document.querySelector('.comments-container');
    const commentInput = document.querySelector('.comment-input');
    const addCommentBtn = document.querySelector('.add-comment-btn');

    let likes = parseInt(localStorage.getItem('likes')) || 0;    //uso de LocalStorage para almacenar like y comentarios
    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    likeCount.textContent = likes;

    // Función para incrementar o decrementar el contador de likes
    function like() {
        if (likeBtn.textContent === 'Me gusta') {
            likes++;
            likeCount.textContent = likes;
            likeBtn.textContent = 'No me gusta';
        } else {
            likes--;
            likeCount.textContent = likes;
            likeBtn.textContent = 'Me gusta';
        }
        localStorage.setItem('likes', likes.toString());
    }

    // Función para dar like o dislike a la imagen
    function imagenLike() {
        if (postImage.classList.contains('liked')) {
            likes--;
            likeCount.textContent = likes;
            postImage.classList.remove('liked');
        } else {
            likes++;
            likeCount.textContent = likes;
            postImage.classList.add('liked');
        }
        localStorage.setItem('likes', likes.toString());
    }

    // Función para agregar un nuevo comentario
    function addComentario() {
        const newCommentText = commentInput.value.trim();
        if (newCommentText !== '') {
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `<span class="comment-username">Usuario:</span>
                                    <span class="comment-text">${newCommentText}</span>`;
            commentsContainer.appendChild(newComment);
            comments.push(newCommentText);
            // Actualizar LocalStorage
            localStorage.setItem('comments', JSON.stringify(comments));
            commentInput.value = ''; // Limpiar el campo de entrada
        }
    }

    // Asignar eventos a los elementos del DOM
    likeBtn.addEventListener('click', like);
    postImage.addEventListener('dblclick', imagenLike);
    addCommentBtn.addEventListener('click', addComentario);

    // Mostrar comentarios almacenados en el LocalStorage
    comments.forEach(function (commentText) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<span class="comment-username">Usuario:</span>
                                    <span class="comment-text">${commentText}</span>`;
        commentsContainer.appendChild(commentElement);
    });
});

