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