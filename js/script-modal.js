const modalWindow = document.querySelector('.modal');
const modalButton = document.querySelector('.contact__button');
const modalButton2 = document.querySelector('.modal__close');
const modalActive= 'modal--active';

modalButton.addEventListener('click', function() {
  event.preventDefault()
  modalWindow.classList.add(modalActive);
});

modalButton2.addEventListener('click', function() {
  modalWindow.classList.remove(modalActive);
});
