let modalWindow = document.querySelector('.modal-window');
let modalButton = document.querySelector('.write-us-button');

modalButton.onclick = function() {
  modalWindow.classList.add('modal-window-active');
};

let modalButton2 = document.querySelector('.modal-window-x');

modalButton2.onclick = function() {
  modalWindow.classList.remove('modal-window-active');
};
