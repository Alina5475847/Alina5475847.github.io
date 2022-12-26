$(document).ready(function() {
    $('.structure__header').on('click', function() {
        $(this).next().slideToggle(300);
        $(this).toggleClass('active');
    });

    let nav = $('.header__mobile');
    let navToggle = $('#navToggle');

    navToggle.on("click", function() {
        $(this).toggleClass('active');
        nav.toggleClass('show');
    });
});