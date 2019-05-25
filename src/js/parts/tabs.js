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