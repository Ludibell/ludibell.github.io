//#region Burger
const header = document.querySelector('#header');
const header_inner = document.querySelector('.header_inner');
const navi = document.querySelector('.navi');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
   header.classList.toggle('active');
   header_inner.classList.toggle('active');
   navi.classList.toggle('active');
   burger.classList.toggle('active');
});
//#endregion 
