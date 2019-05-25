/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

  function tabsTime(show, modal, close, modcontent) {
    modal.style.display = 'block';
    body.classList.add('modal-open');
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

  setTimeout(function () {
    tabsTime(telBtn, modalTel, modalTelClose, modalContent);
  }, 60000); 

}

module.exports = modal;



/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint -W117*/
/*jshint -W083*/

function tabs() {
let tabContent = document.querySelectorAll('.tree, .aluminum, .plastic, .french, .rise'),
    tabBtn = document.querySelectorAll('.glazing_block');


for (let i = 0; i < tabBtn.length; i++) {
  tabBtn[i].addEventListener('click', (event) => {
  let target = event.target;
    // let showTabContent = (b) => {
    //   if (tabBtn[b].classList.contains('active')) {
    //     tabBtn[b].classList.remove('active');
    //   }
    // };
    // showTabContent(i);
    if (target && target.classList.contains('tree_link')) {
      tabBtn[i].classList.add('active');
      tabContent.forEach(item => {
        item.style.display = 'none';
        if (item.classList.contains('tree')) {
          item.style.display = 'block';
        }
      });
    } 
    if (target && target.classList.contains('aluminum_link')) {
      tabBtn[i].classList.add('active');
      tabContent.forEach(item => {
        item.style.display = 'none';
        if (item.classList.contains('aluminum')) {
          item.style.display = 'block';
        }
      });
    }
    if (target && target.classList.contains('plastic_link')) {
      tabBtn[i].classList.add('active');
      tabContent.forEach(item => {
        item.style.display = 'none';
        if (item.classList.contains('plastic')) {
          item.style.display = 'block';
        }
      });
    }
    if (target && target.classList.contains('french_link')) {
      tabBtn[i].classList.add('active');
      tabContent.forEach(item => {
        item.style.display = 'none';
        if (item.classList.contains('french')) {
          item.style.display = 'block';
        }
      });
    }
    if (target && target.classList.contains('rise_link')) {
      tabBtn[i].classList.add('active');
      tabContent.forEach(item => {
        item.style.display = 'none';
        if (item.classList.contains('rise')) {
          item.style.display = 'block';
        }
      });
    }
  });
}

}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/tabsdesign.js":
/*!************************************!*\
  !*** ./src/js/parts/tabsdesign.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint -W117*/
/*jshint -W083*/

function tabsdesign() {
  let tabContentDesign = document.querySelectorAll('.internal, .external, .rising, .roof'),
      tabBtnDesign = document.querySelectorAll('.decoration_item');

  for (let i = 0; i < tabBtnDesign.length; i++) {
    tabBtnDesign[i].addEventListener('click', (event) => {
      let target = event.target;
      // let showtabContentDesign = (b) => {
      //   if (tabBtnDesign[b].classList.contains('active')) {
      //     tabBtnDesign[b].classList.remove('active');
      //   }
      // };
      // showtabContentDesign(i);
      if (target && target.classList.contains('internal')) {
        tabBtnDesign[i].classList.add('after_click');
        tabContentDesign.forEach(item => {
          item.style.display = 'none';
          if (item.classList.contains('internal')) {
            item.style.display = 'block';
          }
        });
      }
      if (target && target.classList.contains('aluminum_link')) {
        tabBtnDesign[i].classList.add('active');
        tabContentDesign.forEach(item => {
          item.style.display = 'none';
          if (item.classList.contains('aluminum')) {
            item.style.display = 'block';
          }
        });
      }
      if (target && target.classList.contains('plastic_link')) {
        tabBtnDesign[i].classList.add('active');
        tabContentDesign.forEach(item => {
          item.style.display = 'none';
          if (item.classList.contains('plastic')) {
            item.style.display = 'block';
          }
        });
      }
      if (target && target.classList.contains('french_link')) {
        tabBtnDesign[i].classList.add('active');
        tabContentDesign.forEach(item => {
          item.style.display = 'none';
          if (item.classList.contains('french')) {
            item.style.display = 'block';
          }
        });
      }
      if (target && target.classList.contains('rise_link')) {
        tabBtnDesign[i].classList.add('active');
        tabContentDesign.forEach(item => {
          item.style.display = 'none';
          if (item.classList.contains('rise')) {
            item.style.display = 'block';
          }
        });
      }
    });
  }

}

module.exports = tabsdesign;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint -W117*/
/*jshint -W083*/

function timer() {
 // let deadline = "December 18 2019 00:00:00";
  let deadline = "2019-12-18";
  let getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60) % 24)),
      days = Math.floor((t / (1000 * 60 * 60 * 24)));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };
  let setClock = (id, endtime) => {
    let timer = document.getElementById(id),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes > span'),
      seconds = timer.querySelector('#seconds > span'),
      t = getTimeRemaining(endtime),
      timeInterval = setInterval(updateClock, 1000);
    if (t.total <= 0) {
      clearInterval(timeInterval);
      days.textContent = '00';
      hours.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';
    } else if (t.total > 0) {
      updateClock();
    }

    function updateClock() {
      let t = getTimeRemaining(endtime);
      if (t.days < 10) {
        days.textContent = ("0" + t.days).slice(-1);
      } else if (t.days < 100) {
        days.textContent = ("0" + t.days).slice(-2);
      } else {
        days.textContent = ("0" + t.days).slice(-3);
      }
      hours.textContent = ("0" + t.hours).slice(-2);
      minutes.textContent = ("0" + t.minutes).slice(-2);
      seconds.textContent = ("0" + t.seconds).slice(-2);
    }
  };

  setClock('timer', deadline);

}

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*jshint -W030*/
/*jshint -W014*/
/*jshint -W083*/
/*jshint -W093*/
/*jshint -W004*/
/*jshint -W117*/
/*jshint -W083*/
/*jshint expr:true*/

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),
      form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
      tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
      tabsdesign = __webpack_require__(/*! ./parts/tabsdesign.js */ "./src/js/parts/tabsdesign.js"),
      timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js");
  // let calc = require('./parts/calc.js'),
  //     
  //     slider = require('./parts/slider.js'),
    
    modal();
    form();
    tabs();
    tabsdesign();
    timer();
  // calc();
  // 
  // slider();
    
    
    

});


/***/ })

/******/ });
//# sourceMappingURL=script.js.map