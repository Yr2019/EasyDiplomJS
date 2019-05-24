/*jshint -W117*/
/*jshint -W083*/

function form() {
  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так',
    check: 'Проверка пройдена',
    error: 'Нужно пройти проверку'
  };

  let form = document.querySelectorAll('.form'),
      statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      statusMessage.style.cssText = `
                    font-size: 12px;
                    color: red;`;            
  let isValid = false, name ,tel, call = {}, order = {}, 
      obj = { 
        call: call,
        order: order
      };

  function checkForm(elem) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].style.position = 'relative';
      for (let j = 0; j < elem[i].length; j++) {
        elem[i][j].addEventListener('input', function () {
          if (this.name === 'user_name') {
            elem[i].insertBefore(statusMessage, elem[i].children[1]);
            let re = (/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']{1,20}$/);
            if (re.test(String(this.value)) === true ) {
              name = true;
              statusMessage.style.cssText = 'text-align:center;z-index:10001;top:190px;position:absolute;';
              statusMessage.innerHTML = message.check;
            } else {
              name = false;
              statusMessage.style.cssText = 'text-align:center;z-index:10001;top:190px;position:absolute;';
              statusMessage.innerHTML = message.error;
            }
          } else if (this.name === 'user_phone') {
            elem[i].insertBefore(statusMessage, elem[i].children[2]);
            this.value = '+' + this.value.replace(/[^\d]/g, '').slice(0, 11);
            if (this.value.length === 12) {
              tel = true;
              statusMessage.style.cssText = 'text-align:center;z-index:10001;top:270px;position:absolute;';
              statusMessage.innerHTML = message.check;
            } else {
              tel = false;
              statusMessage.style.cssText = 'text-align:center;z-index:10001;top:270px;position:absolute;';
              statusMessage.innerHTML = message.error;
            }
          }
          if (tel === true && name === true) {
            isValid = true;
            console.log("All Checked");
          } 
        });
      }
    }
    }

  function sendForm(elem) {
    checkForm(elem);
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener('submit', function (e) {
        e.preventDefault();
        elem[i].insertBefore(statusMessage, elem[i].children[3]);
        statusMessage.style.cssText = 'text-align:center;z-index:10001;top:400px;left:95px;position:absolute;';
        statusMessage.innerHTML = message.error;
        if (isValid === true) {
          statusMessage.innerHTML = message.check;
          let request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
          let formData = new FormData(elem[i]);
          for (let j = 0; j < elem[i].length; j++) {
            if (elem[i][j].type === 'submit' && elem[i][j].innerHTML == "Вызвать замерщика!") {
              formData.forEach(function (value, key) {
              call[key] = value;
            });
            } else if (elem[i][j].type === 'submit' && elem[i][j].innerHTML == "Заказать звонок") {
              formData.forEach(function (value, key) {
                order[key] = value;
              });
            }
          }
          let json = JSON.stringify(obj);
          request.send(json);
          request.onreadystatechange = function () {
            statusMessage.style.cssText = 'text-align:center;z-index:10001;top:400px;left:35px;position:absolute;';
            if (request.readyState < 4) {
              statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
              statusMessage.innerHTML = message.success;
            } else {
              statusMessage.innerHTML = message.failure;
            }
          };
        }
  });
    }
  }
    sendForm(form);
}

module.exports = form;