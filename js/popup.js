let btns = document.querySelectorAll("*[data-modal]");

for(let i = 0; i<btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let name = btns[i].getAttribute('data-modal');
        let popup = document.querySelector("[data-modal-window='"+name+"']");
        popup.style.display = "block";

        let close = document.querySelectorAll(".modal__close");

        close.forEach(item => {
            item.addEventListener('click', event => {
                popup.style.display = "none";
            });
        });
    });
}