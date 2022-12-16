const modalBtn = document.querySelectorAll('[data-modal]');
const modalClose = document.querySelectorAll('.modal__close')
const modal = document.querySelectorAll('.modal')

modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalContent = modal.querySelector('.modal__dialog');

        modalContent.addEventListener('click', event => {
            event.stopPropagation();
        });
        console.log(modalId);

        modal.classList.toggle('show');
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
    currentModal.classList.remove('show');
}


document.addEventListener('click', function(evt) {
    const dialogTab = evt.target.closest('.modal__block');
    if (dialogTab) { // если клик был по табу
      const dialogSelect = evt.target.closest('.modal__sidebar');
      const dialogRow = evt.target.closest('.modal__sidebar-item');
    }
});