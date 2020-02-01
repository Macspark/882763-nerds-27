const modalWindow = document.querySelector('.modal');
const modalOpenBtn = document.querySelector('.contact__button');
const modalCloseBtn = document.querySelector('.modal__close');
const modalActive = 'modal--active';

modalOpenBtn.addEventListener('click', function() {
  event.preventDefault()
  modalWindow.classList.add(modalActive);
});

modalCloseBtn.addEventListener('click', function() {
  modalWindow.classList.remove(modalActive);
});
