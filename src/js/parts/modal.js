/*jshint -W117*/
/*jshint -W083*/

function modal() {
  let callBtn = document.querySelector('.popup_engineer_btn'),
      modalEnginer = document.querySelector('.popup_engineer'),
      modalEnginerClose = document.querySelector('.popup_engineer > div > div > button > strong'),
      telBtn = document.querySelector('.phone_link'),
      modalTel = document.querySelector('.popup'),
      modalTelClose = document.querySelector('div.popup > div > div > button > strong'),
      modalContent = document.querySelector('.popup_content'),
      callMaster = document.querySelector('body > section.feedback > div > div > a'),
      body = document.querySelector('body');

  function showModal(show, modal, close, modcontent) {
    show.addEventListener('click', function () {
      modal.style.display = 'block';
      body.classList.add('modal-open');
    });
    close.addEventListener('click', function () {
      modal.style.display = 'none';
      body.classList.remove('modal-open');
    });
    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
        body.classList.remove('modal-open');
      }
    });
  }

  showModal(callBtn, modalEnginer, modalEnginerClose, modalContent);
  showModal(telBtn, modalTel, modalTelClose, modalContent);
  showModal(callMaster, modalTel, modalTelClose, modalContent);
}

module.exports = modal;

