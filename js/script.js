let modalWindow = document.querySelector('.modal');
let modalButton = document.querySelector('.contact__button');
let modalButton2 = document.querySelector('.modal__close');
const modalActive= 'modal--active';

let slideBtn1 = document.querySelector('.slider__switcher1');
let slideBtn2 = document.querySelector('.slider__switcher2');
let slideBtn3 = document.querySelector('.slider__switcher3');
let slide1 = document.querySelector('.slider__slide1');
let slide2 = document.querySelector('.slider__slide2');
let slide3 = document.querySelector('.slider__slide3');
const slideBtnActive = 'slider__switcher--active';
const slideActive = 'slider__slide--active';


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
