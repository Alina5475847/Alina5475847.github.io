$(document).ready(function() {
  /* Выезжающий сайдбар */

  $('.burger__sidebar').on("click", function() {
    $(this).toggleClass('active');
    $('.sidebar').toggleClass('show');
    burger.removeClass('active');
    menuBody.removeClass('show');
    $(this).toggleClass(fixed);
  });

  /* Бургер меню */

  let burger = $('.header__menu');
  let menuBody = $('.header__right');

  burger.on('click', function() {
    $(this).toggleClass('active');
    menuBody.toggleClass('show');
    $('.sidebar').removeClass('show');
    $('.burger__sidebar').removeClass('active');
  });

  $('#persCab').on("click", function() {
    $('.header__cab').toggleClass('show');
  });

  /* Кнопки */
  
  $('.button-1').on('click', function() {
    $(this).addClass('active');
    $('.button-2').removeClass('active');
    $('.button-3').removeClass('active');
    $('.button-4').removeClass('active');
    $('.button-5').removeClass('active');
  });
  $('.button-2').on('click', function() {
    $(this).addClass('active');
    $('.button-1').removeClass('active');
    $('.button-3').removeClass('active');
    $('.button-4').removeClass('active');
    $('.button-5').removeClass('active');
  });
  $('.button-3').on('click', function() {
    $(this).addClass('active');
    $('.button-1').removeClass('active');
    $('.button-2').removeClass('active');
    $('.button-4').removeClass('active');
    $('.button-5').removeClass('active');
  });
  $('.button-4').on('click', function() {
    $(this).addClass('active');
    $('.button-1').removeClass('active');
    $('.button-3').removeClass('active');
    $('.button-2').removeClass('active');
    $('.button-5').removeClass('active');
  });
  $('.button-5').on('click', function() {
    $(this).addClass('active');
    $('.button-1').removeClass('active');
    $('.button-3').removeClass('active');
    $('.button-2').removeClass('active');
    $('.button-4').removeClass('active');
  });
});

document.querySelector('.modal__dropdown-btn').addEventListener('click', function() {
  document.querySelector('.modal__dropdown').classList.toggle('show');
  document.querySelector('.modal__select').classList.toggle('active');
});

document.querySelectorAll('.modal__dropdown-item').forEach(function(listItem) {
  listItem.addEventListener('click', function(e) {
      this.classList.toggle('active');
  });
});