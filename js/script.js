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
      input = document.querySelectorAll('input'),
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
            let re = (/^[a-zA-Z][a-zA-Z0-9-_\.]{2,20}$/);
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
            statusMessage.style.cssText = 'text-align:center;z-index:10001;top:400px;left:60px;position:absolute;';
            if (request.readyState < 4) {
              statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
              statusMessage.innerHTML = message.success;
            } else {
              statusMessage.innerHTML = message.failure;
            }
          };
          for (let i = 0; i < input.length; i++) {
              input[i].value = '';
            }
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
    modalTelClose = document.querySelector('div.popup > div > div > button > strong');


  function showModal(show, modal, close) {
    show.addEventListener('click', function () {
      modal.style.display = 'block';
    });
    close.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  }

  showModal(callBtn, modalEnginer, modalEnginerClose);
  showModal(telBtn, modalTel, modalTelClose);
}

module.exports = modal;

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
      form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js");
  // let calc = require('./parts/calc.js'),
  //     
  //     slider = require('./parts/slider.js'),
  //     tabs = require('./parts/tabs.js'),
  //     timer = require('./parts/timer.js'),
  //     
    modal();
    form();
  // calc();
  // 
  // slider();
  // tabs();
  // timer();
    

});


/***/ })

/******/ });
//# sourceMappingURL=script.js.map