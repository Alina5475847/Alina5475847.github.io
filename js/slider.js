let dots = document.getElementsByClassName('slider__dots-item'),
    dotsArea = document.getElementsByClassName('slider__dots')[0],
    slides = document.getElementsByClassName('slider__item'),
    prevBtn = document.getElementById('slider__left'),
    nextBtn = document.getElementById('slider__right'),
    slideIndex = 1;

showSlides(slideIndex);

function showSlides (n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}

function plusSlides (n) {
    showSlides(slideIndex +=n);
}

function currentSlide (n) {
    showSlides(slideIndex = n);
}

prevBtn.onclick = function() {
    plusSlides(-1);
}

nextBtn.onclick = function() {
    plusSlides(1);
}

dotsArea.onclick = function(e) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('slider__dots-item') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
}