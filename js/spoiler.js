$(document).ready(function() {
    let title = $('.support__spoiler-content');
    let text = $('.support__spoiler-bottom');

    title.on('click', function() {
        $(this).toggleClass('active').next().slideToggle(300);
        $('.support__spoiler-item').toggleClass('acive');
    });

    /* $('.verif-block__btn').on('click', function() {
        $(this).toggleClass('active').next().slideToggle(300);
        $('.verif__select-body').toggleClass('acive');
    }); */

    $('.modal__pay-usd').on('click', function() {
        $('.modal__pay-select').toggleClass('active');
    });
});