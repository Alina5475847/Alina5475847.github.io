document.querySelector('.header__data-item-btn').addEventListener('click', function() {
    document.querySelector('.header__cab').classList.toggle('header__cab--visible');
    this.classList.toggle('header__data-item-btn--active');
});

var x = document.getElementsByClassName('page__content-color')
for (var i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function(){

    var selectedEl = document.querySelector(".selected");
    if(selectedEl){
        selectedEl.classList.remove("selected");
    }
    this.classList.add("selected");

    }, false);;
}