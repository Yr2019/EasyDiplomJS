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