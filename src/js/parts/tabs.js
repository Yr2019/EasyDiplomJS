/*jshint -W117*/
/*jshint -W083*/

function tabs() {
let tabContent = document.querySelectorAll('.tree, .aluminum, .plastic, .french, .rise'),
    //tabBtn = document.querySelectorAll('.glazing_block');
    tabBtn = document.querySelectorAll('.slick-slide > a');


  for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', (event) => {
    let target = event.target;
    let showTabContent =  function (b) {
      tabContent.forEach(item => {
        item.style.display = 'none';
        //tabBtn[i].classList.remove('active');  Пока не придумал как удалять актывной клас когда переключаешся между табамы
        if (item.classList.contains(b)) {
          tabBtn[i].classList.add('active');
          item.style.display = 'block';
        }
      });
    };
    if (target && target.classList.contains('tree_link')) {
      showTabContent('tree');
    }
    if (target && target.classList.contains('aluminum_link')) {
      showTabContent('aluminum');
    }
    if (target && target.classList.contains('plastic_link')) {
      showTabContent('plastic');
    }
    if (target && target.classList.contains('french_link')) {
      showTabContent('french');
    }
    if (target && target.classList.contains('rise_link')) {
      showTabContent('rise');
    }
});
}

}

module.exports = tabs;