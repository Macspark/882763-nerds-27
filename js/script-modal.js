const modalWindow = document.querySelector('.modal');
const modalOpenBtn = document.querySelector('.contact__button');
const modalCloseBtn = document.querySelector('.modal__close');
const modalActive = 'modal--active';
let isModalOpen = false;

modalOpenBtn.addEventListener('click', function(event) {
  event.preventDefault()
  modalWindow.classList.add(modalActive);
  isModalOpen = true;
});

modalCloseBtn.addEventListener('click', function() {
  modalWindow.classList.remove(modalActive);
  isModalOpen = false;
});

document.addEventListener('keydown', function(event) {
  if (event.keyCode == 27) {
  modalWindow.classList.remove(modalActive);
  isModalOpen = false;
  }
});
