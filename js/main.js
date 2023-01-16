document.querySelector('.verif-block__btn').addEventListener('click', function() {
    document.querySelector('.verif__select-body').classList.toggle('verif__select-body--visible');
    this.classList.toggle('verif-block__btn--active');
});

document.querySelectorAll('.verif__select-item').forEach(function(listItem) {
    listItem.addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelector('.verif-block__btn').innerHTML = this.innerHTML;
        document.querySelector('.verif-block__btn').focus();
        document.querySelector('.verif__select-body').classList.remove('verif__select-body--visible');
        document.querySelector('.verif-block__btn').classList.remove('verif-block__btn--active');
    });
});