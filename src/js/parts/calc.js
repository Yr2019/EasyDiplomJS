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
    checkbox.forEach(element => {
    element.addEventListener('click', function (event) {
      for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].type === 'checkbox' && checkbox[i].checked) {
          checkbox.checked = checkbox[i].value;
          if (checkbox[i + 1].innerHTML === 'Холодное') {
            objCalc.windowSeason = 'cold';
          } else if (checkbox[i + 1].innerHTML === 'Теплое') {
            objCalc.windowSeason = 'warm';
          }
        }
      }
    });
    });
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
  for (let i = 0; i < dots.length + 1; i++) {
    if (event.target.classList.contains('dots') && event.target == dots[i - 1]) {
    currentSlide(i);
    }
  }
});

}
module.exports = calc;