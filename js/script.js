let modalWindow = document.querySelector('.modal-window');
let modalButton = document.querySelector('.write-us-button');
let modalButton2 = document.querySelector('.modal-window-x');
let modalActive= 'modal-window-active';

let slideBtn1 = document.querySelector('.activate-1');
let slideBtn2 = document.querySelector('.activate-2');
let slideBtn3 = document.querySelector('.activate-3');
let slide1 = document.querySelector('.slide-1');
let slide2 = document.querySelector('.slide-2');
let slide3 = document.querySelector('.slide-3');
let slideBtnActive = 'button-active';
let slideActive = 'slide-active';


modalButton.addEventListener('click', function() {
  modalWindow.classList.add(modalActive);
});

modalButton2.addEventListener('click', function() {
  modalWindow.classList.remove(modalActive);
});

slideBtn1.addEventListener('click', function() {
  slide1.classList.add(slideActive);
  slide2.classList.remove(slideActive);
  slide3.classList.remove(slideActive);
  slideBtn1.classList.add(slideBtnActive);
  slideBtn2.classList.remove(slideBtnActive);
  slideBtn3.classList.remove(slideBtnActive);
});

slideBtn2.addEventListener('click', function() {
  slide1.classList.remove(slideActive);
  slide2.classList.add(slideActive);
  slide3.classList.remove(slideActive);
  slideBtn1.classList.remove(slideBtnActive);
  slideBtn2.classList.add(slideBtnActive);
  slideBtn3.classList.remove(slideBtnActive);
});

slideBtn3.addEventListener('click', function() {
  slide1.classList.remove(slideActive);
  slide2.classList.remove(slideActive);
  slide3.classList.add(slideActive);
  slideBtn1.classList.remove(slideBtnActive);
  slideBtn2.classList.remove(slideBtnActive);
  slideBtn3.classList.add(slideBtnActive);
});
