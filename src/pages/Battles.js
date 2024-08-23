document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list');

    // Load comments from localStorage
    const loadComments = () => {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        commentsList.innerHTML = '';
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `
                <p><strong>${comment.name}:</strong> ${comment.text}</p>
            `;
            commentsList.appendChild(commentElement);
        });
    };

    // Save a new comment
    const saveComment = (name, text) => {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push({ name, text });
        localStorage.setItem('comments', JSON.stringify(comments));
        loadComments();
    };

    // Handle form submission
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const text = document.getElementById('comment').value;
        saveComment(name, text);
        commentForm.reset();
    });

    // Initial load of comments
    loadComments();
});