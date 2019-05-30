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

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint -W117*/
/*jshint -W083*/

function calc() {
  let calcBtn = document.querySelectorAll('.glazing_price_btn'),
      calcModal = document.querySelector('.popup_calc'),
      closeModal = document.querySelector('body > div.popup_calc > div > div > button.popup_calc_close > strong'),
      body = document.querySelector('body'),
      balconIcons = document.querySelectorAll('.balcon_icons > a > img'),
      inputWidth = document.getElementById('width'),
      inputHeight = document.getElementById('height'),
      resultBtn = document.querySelector('.popup_calc_button'),
      resultCalcModal = document.querySelector('.popup_calc_profile'),
      resultCalcClose = document.querySelector("body > div.popup_calc_profile > div > div > button.popup_calc_profile_close > strong"),
      resultCheckBox = document.querySelectorAll('.checkbox-custom'),
      resultBtnInfo = document.querySelector('.popup_calc_profile_button'),
      calcModalEnd = document.querySelector('body > div.popup_calc_end'),
      calcModalEndClose = document.querySelector('body > div.popup_calc_end > div > div > button');

  let windowWidth, windowHeight, windowType, windowSeason,
      objCalc = {
      windowWidth:    windowWidth,
      windowHeight:   windowHeight,
      windowType:     windowType,
      windowSeason :  windowSeason,
    };

    
  function showModalCalc(show, modal, close, modcontent) {
    show.forEach(element => {
      element.addEventListener('click', function (event) {
        if (event.target) {
          event.preventDefault();
        }
        modal.style.display = 'block';
        body.classList.add('modal-open');
      });
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

  showModalCalc(calcBtn, calcModal, closeModal);

  
  
  function validate(evt) {
    evt.oninput = function () {
      this.value = this.value.replace(/[^\d]/g, '').slice(0, 8);
      if (this.id === 'height') {
        objCalc.windowHeight = this.value;
      } else if (this.id === 'width') {
        objCalc.windowWidth = this.value;
      }
    };
  }

  validate(inputHeight);
  validate(inputWidth);




function resultCalc(show, modal, close, calcModal) {
  show.addEventListener('click', function () {
    modal.style.display = 'block';
    body.classList.add('modal-open');
    calcModal.style.display = 'none';
    if (modal == resultCalcModal) {
      resultInfo(resultBtnInfo);
    } else if (modal == calcModalEnd) {
     // sendForm(form);  Пока не придумал как связать два модуля между собой.. Form i Calc
    }
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

function resultInfo() {
  let controlType = document.getElementById("view_type");
  controlType.addEventListener('click', function () {
  let checkType = controlType.options[controlType.selectedIndex].value;
      objCalc.windowType = checkType;
  });

  let checkbox = document.querySelectorAll('.label, input[type="checkbox"]');

  checkbox.forEach(function (tab, a) {
    tab.addEventListener('change', toggleItem.bind(this, tab, checkbox, a));
  });

  function toggleItem(item, tabBtn, a) {
    if (item.type === 'checkbox' && item.checked) {
      item.checked = item.value;
      if (tabBtn[a + 1].innerHTML === 'Холодное') {
        objCalc.windowSeason = 'cold';
        tabBtn[a + 2].disabled = true;
        console.log('cold');
      } else if (tabBtn[a + 1].innerHTML === 'Теплое') {
        objCalc.windowSeason = 'warm';
        tabBtn[a - 2].disabled = true;
        console.log('warm');
      }
    } else if (item.type === 'checkbox' && item.checked === false) {
      if (a == 0) {
        tabBtn[a + 2].disabled = false;
      } else if (a == 2) {
        tabBtn[a - 2].disabled = false;
      }
        console.log('none');
    }
  }
}

resultCalc(resultBtn, resultCalcModal, resultCalcClose, calcModal);
resultCalc(resultBtnInfo, calcModalEnd, calcModalEndClose, resultCalcModal);


// Slider Calc

let slideIndex = 1,
  slides = document.querySelectorAll('.big_img > img'),
  dotsWrap = document.querySelector('.balcon_icons'),
  dots = document.querySelectorAll('.balcon_icons > a > img');

showSlides(slideIndex);

function showSlides(n) {

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((item) => item.style.display = 'none');
  dots.forEach((item) => item.classList.remove('do_image_more'));
  dots.forEach((item) => item.classList.add('dots'));
  slides[slideIndex - 1].style.display = 'inline-block';
  dots[slideIndex - 1].classList.add('do_image_more');
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

dotsWrap.addEventListener('click', function (event) {
  if (event.target) {
    event.preventDefault();
  }
  for (let i = 0; i < dots.length + 1; i++) {
    if (event.target.classList.contains('dots') && event.target == dots[i - 1]) {
      event.stopPropagation();
    currentSlide(i);
    }
  }
});

}
module.exports = calc;

/***/ }),

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

/***/ "./src/js/parts/largeImage.js":
/*!************************************!*\
  !*** ./src/js/parts/largeImage.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint -W117*/
/*jshint -W083*/


function largeImage() {
  
function renderModal(element) {
  let modalCre = document.createElement('div');
  modalCre.classList.add('modal');
  modalCre.setAttribute("id", "myModal");
  let child = document.createElement('span');
  child.classList.add('close');
  child.innerHTML += "+";
  let child2 = document.createElement('img');
  child2.classList.add('modal-content');
  child2.setAttribute("id", "img01");
  child2.innerHTML = element;
  modalCre.appendChild(child);
  modalCre.appendChild(child2);
  document.body.appendChild(modalCre);
}
renderModal();

let images = document.querySelectorAll('body > section.works > div > div.row > div > a');
let modal = document.getElementById('myModal');
let modalImg = document.getElementById("img01");


function ChangeImage() {
  images.forEach(function (element) {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      // event.onmousewheel = function () {
      //   document.body.style.overflow = 'hidden';
      // };

      let target = event.target;
      modal.style.display = "block";
      modalImg.src = this.href;
    });
  });

  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };
}

  ChangeImage();

}


module.exports = largeImage;



// function largeImage() {
//   let images = document.querySelectorAll('body > section.works > div > div.row > div > a');
//   var modal = document.getElementById('myModal');
//   var modalImg = document.getElementById("img01");

//   images.forEach(function (element) {
//     element.addEventListener('click', function (event) {
//       event.preventDefault();
//       let target = event.target;
//         modal.style.display = "block";
//         modalImg.src = this.href;
//     });
//   });

//   modal.addEventListener('click', function (event) {
//     if (event.target === modal) {
//       modal.style.display = 'none';
//     }
//   });

//   var span = document.getElementsByClassName("close")[0];
//   span.onclick = function () {
//     modal.style.display = "none";
//   };

// }


//  module.exports = largeImage;

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
      body = document.querySelector('body'),
      url = document.querySelector('.phone_link');
      
      
  function showModal(show, modal, close, modcontent) {
    show.addEventListener('click', function (event) {
      if (event.target) {
      event.preventDefault();
      }
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
    tabBtn = document.querySelectorAll('.slick-slide > a');
    
  tabBtn.forEach(function (tab, a) {
    tab.addEventListener('click', toggleItem.bind(this, tab, tabBtn, a));
  });

  function toggleItem(item, tabBtn, a) {
    for (let sibling of tabBtn) {
      sibling.classList.remove('active');
    }
    item.classList.add('active');
    changeContent(a);
  }

  function changeContent(a) {
    for (let sibling of tabContent) {
      sibling.style.display = 'none';
    }
    tabContent[a].style.display = 'block';
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
  let tabContent = document.querySelectorAll('.decoration_item div'),
      tabBtn = document.querySelectorAll('.internal, .external, .rising, .roof');

  [...tabContent, ...tabBtn].forEach(function (tab, index) {
    tab.addEventListener('click', toggleItem.bind(this, tab, tabContent, tabBtn, index));
  });
  
  function toggleItem(item, siblings, tabBtn, index) {
    for (let sibling of siblings) {
      sibling.classList.remove('after_click');
    }
    for (let sibling of tabBtn) {
      sibling.style.display = 'none';
    }
    item.classList.add('after_click');
    tabBtn[index].style.display = 'block';
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
      timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
      largeImage = __webpack_require__(/*! ./parts/largeImage.js */ "./src/js/parts/largeImage.js"),
      calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js");

    modal();
    form();
    tabs();
    tabsdesign();
    timer();
    calc();
    largeImage();

    
    
    

});


/***/ })

/******/ });
//# sourceMappingURL=script.js.map