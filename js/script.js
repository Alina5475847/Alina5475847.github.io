let btns = document.querySelectorAll("*[data-modal]");
let btn = document.querySelectorAll(".modal__close-arrow");

for(let i = 0; i<btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let name = btns[i].getAttribute('data-modal');
        let popup = document.querySelector("[data-modal-window='"+name+"']");
        let popupBlock = document.querySelectorAll('.modal__filter');
        let body = document.querySelector('body');
        popup.style.display = "flex";
        body.style.overflow = "hidden";

        let close = document.querySelectorAll(".modal__close");
        let arrowClose = document.querySelectorAll(".arrow__close");

        close.forEach(item => {
            item.addEventListener('click', event => {
                popup.style.display = "none";
                body.style.overflow = "auto";
            });
        });

        arrowClose.forEach(item => {
            item.addEventListener('click', event => {
                popupBlock.forEach(item => {
                    item.style.display = "none";
                });
            });
        });
    });
}

$(document).ready(function() {

    /* Радиокнопки */

    $.each($('.modal__element'), function(index, val) {
        if($(this).find('input').prop('checked')==true) {
            $(this).addClass('active');
        }
    });

    $(document).on("click", '.modal__element', function(event) {
        $(this).parents('.modal__block-body').find('.modal__element').removeClass('active');
        $(this).parents('.modal__block-body').find('.modal__element input').prop('checked', false);
        $(this).toggleClass('active');
        $(this).find('input').prop('checked', true);
        return false;
    });
});