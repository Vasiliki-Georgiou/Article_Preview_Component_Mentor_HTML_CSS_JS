const button = document.querySelector('.btn');
const modal = document.querySelector('.social-media-icons-modal');

button.addEventListener('click', () => {
  modal.classList.toggle('show');
})
