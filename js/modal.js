const modalBtn = document.querySelectorAll('[data-modal]');
const modalClose = document.querySelectorAll('.modal__close')
const modal = document.querySelectorAll('.modal');
const modalBodyMob = document.querySelectorAll('.modal__mobile');
const body = document.body;

modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalFirst = document.getElementById('first');
        let modalContent = modal.querySelector('.modal__dialog');

        modalContent.addEventListener('click', event => {
            event.stopPropagation();
        });
        console.log(modalId);

        modal.classList.toggle('show');
        $this.classList.toggle('active');
        /* modalFirst.classList.toggle('none'); */
        body.classList.add('no-scroll');

        setTimeout(function() {
            modalContent.style.transform = 'none';
        }, 10)
    });
});

modalClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.modal');

        closeModal(currentModal);
    });
});

modal.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget;

        closeModal(currentModal);
    });
});

function closeModal(currentModal) {
    let modalContent = currentModal.querySelector('.modal__dialog');
    modalContent.removeAttribute('style');

    setTimeout(function() {
        currentModal.classList.remove('show');
        body.classList.remove('no-scroll');
    }, 100)
}


document.querySelectorAll('.modal__sidebar-col').forEach(function(dropDownWrapper) {
    dropDownWrapper.querySelector('.modal__sidebar-item-block').addEventListener('click', function() {
        dropDownWrapper.querySelector('.modal__mobile').classList.toggle('modal__mobile--visible');
    });
});

document.addEventListener('click', function(e) {
    if(e.target !== ('.modal__sidebar-item-block')) {
        document.querySelector('.modal__mobile').classList.remove('modal__mobile--visible');
        document.querySelector('.modal__sidebar-item-block').classList.remove('modal__sidebar-item-block--active');
    }
});

/* ----------------------------------------- */

const buttons = document.querySelectorAll('.modal__mobile-title');

function handleClick() {

    let modal__mobile = document.querySelectorAll('.modal__mobile');

    modal__mobile.forEach((modal) => {

        modal.classList.remove('modal__mobile--visible');

    });

}

buttons.forEach((button) => {

    button.addEventListener('click', handleClick);

});