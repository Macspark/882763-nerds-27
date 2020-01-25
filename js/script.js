let modalWindow = document.querySelector('.modal-window');
let modalButton = document.querySelector('.write-us-button');
let modalButton2 = document.querySelector('.modal-window-x');
let active = 'modal-window-active';

modalButton.onclick = function() {
  modalWindow.classList.add(active);
};

modalButton2.onclick = function() {
  modalWindow.classList.remove(active);
};
