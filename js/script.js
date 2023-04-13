$(document).ready(function() {
    $('.interview__body').slick({
        slidesToShow: 1
    });

    $('.header__arrow-mob').on('click', function() {
        $(this).toggleClass('active').next().slideToggle(300);
    });

    $('.header__burger').on('click', function() {
        $('.header__nav').toggleClass('show');
        $('body').toggleClass('no-scroll');
    });

    $('.header__close').on('click', function() {
        $('.header__nav').removeClass('show');
        $('body').removeClass('no-scroll');
    });

    let arrow = $('.arrow');
    let intro = $('.header');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let header = $('.header__main');

    $(window).on("scroll load resize", function() {

        scrollPos = $(this).scrollTop();

        if(scrollPos > introH) {
            arrow.addClass("fixed");
        } else {
            arrow.removeClass("fixed");
        }

        if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        console.log(elementOffset);

        $("html, body").animate({
            scrollTop: elementOffset - 100
        }, 1000);
    });
});

const doc = window.document;
const links = doc.querySelectorAll(".header__link");
const linksCount = links.length;
const currentURL = doc.URL;

for (let i = 0; i < linksCount; i++) {
  let linkURL = links[i].href;

  if (currentURL.startsWith(linkURL)) {
    links[i].classList.add("active");
  }
}