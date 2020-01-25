let modalWindow = document.querySelector('.modal-window');
let modalButton = document.querySelector('.write-us-button');
let modalButton2 = document.querySelector('.modal-window-x');
let active = 'modal-window-active';

modalButton.addEventListener('click', function() {
  modalWindow.classList.add(active);
});

modalButton2.addEventListener('click', function() {
  modalWindow.classList.remove(active);
});
