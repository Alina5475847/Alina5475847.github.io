document.querySelector('.header__data-item-btn').addEventListener('click', function() {
    document.querySelector('.header__cab').classList.toggle('header__cab--visible');
    this.classList.toggle('header__data-item-btn--active');
});