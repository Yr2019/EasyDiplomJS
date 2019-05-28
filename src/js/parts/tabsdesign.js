/*jshint -W117*/
/*jshint -W083*/

function tabsdesign() {
  let tabContent = document.querySelectorAll('.internal, .external, .rising, .roof'),
      tabBtn = document.querySelectorAll('.internal_link, .external_link, .rising_link, .roof_link');


  for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', (event) => {
      let target = event.target;
      let showTabContent = function (b) {
        for (let j = 0; j < tabContent.length; j++) {
          tabContent[j].style.display = 'none';
          // tabBtn[i].classList.remove('after_click');
          // tabBtn[i].classList.add('no_click');
          //tabBtn[i].classList.remove('active');  Пока не придумал как удалять актывной клас когда переключаешся между табамы
          if (target.innerHTML == b ) {
            tabBtn[i].classList.remove('no_click');
            tabBtn[i].classList.add('after_click');
           tabContent[i].style.display = 'block';
          }
        }
      };
      if (target.innerHTML === 'Внутренняя отделка') {
        showTabContent('Внутренняя отделка');
      }
      if (target.innerHTML === 'Внешняя отделка') {
        showTabContent('Внешняя отделка');
      }
      if (target.innerHTML === 'Выносное остекление') {
        showTabContent('Выносное остекление');
      }
      if (target.innerHTML === 'Крыша на балкон') {
        showTabContent('Крыша на балкон');
      }
    });
  }

}

module.exports = tabsdesign;