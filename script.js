document.addEventListener("DOMContentLoaded", () => {
    const heartButton = document.getElementById('heart-button');
    const likeCountSpan = document.getElementById('like-count');

    let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
    let isLiked = JSON.parse(localStorage.getItem('isLiked')) || false;

    likeCountSpan.textContent = likeCount;
    if (isLiked) {
        heartButton.classList.add('liked');
    }

    heartButton.addEventListener('click', () => {
        isLiked = !isLiked;

        likeCount = isLiked ? likeCount + 1 : likeCount - 1;

        likeCountSpan.textContent = likeCount;
        heartButton.classList.toggle('liked', isLiked);

        localStorage.setItem('likeCount', likeCount);
        localStorage.setItem('isLiked', isLiked);
    });
});
