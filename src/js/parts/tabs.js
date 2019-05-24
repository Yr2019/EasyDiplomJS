/*jshint -W117*/
/*jshint -W083*/

function tabs() {
let tabContent = document.querySelectorAll('.tree, .aluminum, .plastic, .french, .rise'),
    tabBtn = document.querySelectorAll('.glazing_block');
    tree = document.querySelector('.tree');


for (let i = 0; i < tabBtn.length; i++) {
  tabBtn[i].addEventListener('click', (event) => {
  let target = event.target;
    if (target && target.classList.contains('tree_link')) {
      tabContent.forEach(item => {
        item.style.display = 'none';
        item.classList.remove('active');
        if (item.classList.contains('tree')) {
          item.style.display = 'block';
          item.classList.add('active');
        }
      });
    } 
    if (target && target.classList.contains('aluminum_link')) {
      tabContent.forEach(item => {
        item.style.display = 'none';
        item.classList.remove('active');
        if (item.classList.contains('aluminum')) {
          item.style.display = 'block';
          item.classList.add('active');
        }
      });
    }
    if (target && target.classList.contains('plastic_link')) {
      tabContent.forEach(item => {
        item.style.display = 'none';
        item.classList.remove('active');
        if (item.classList.contains('plastic')) {
          item.style.display = 'block';
          item.classList.add('active');
        }
      });
    }
    if (target && target.classList.contains('french_link')) {
      tabContent.forEach(item => {
        item.style.display = 'none';
        item.classList.remove('active');
        if (item.classList.contains('french')) {
          item.style.display = 'block';
          item.classList.add('active');
        }
      });
    }
    if (target && target.classList.contains('rise_link')) {
      tabContent.forEach(item => {
        item.style.display = 'none';
        item.classList.remove('active');
        if (item.classList.contains('rise')) {
          item.style.display = 'block';
          item.classList.add('active');
        }
      });
    }
  });
}

}

module.exports = tabs;