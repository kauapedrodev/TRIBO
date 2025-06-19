document.addEventListener('DOMContentLoaded', () => {
  // Alternância entre modos claro e escuro
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeToggle.textContent = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
  });

  // Curtidas
  const likeButtons = document.querySelectorAll('.like-btn');
  likeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const countSpan = button.querySelector('.like-count');
      let count = parseInt(countSpan.textContent);
      if (button.classList.toggle('liked')) {
        count++;
      } else {
        count--;
      }
      countSpan.textContent = count;
    });
  });

  // Comentários
  const commentButtons = document.querySelectorAll('.comment-btn');
  commentButtons.forEach(button => {
    button.addEventListener('click', () => {
      const post = button.closest('.post');
      const commentSection = post.querySelector('.comment-section');
      commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
    });
  });

  // Envio de comentários
  const submitButtons = document.querySelectorAll('.submit-comment');
  submitButtons.forEach(button => {
    button.addEventListener('click', () => {
      const post = button.closest('.post');
      const commentInput = post.querySelector('.comment-input');
      const commentText = commentInput.value.trim();
      if (commentText) {
        const commentContainer = post.querySelector('.comments');
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentContainer.appendChild(newComment);
        commentInput.value = '';
      }
    });
  });
});

