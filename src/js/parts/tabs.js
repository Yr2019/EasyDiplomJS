/*jshint -W117*/
/*jshint -W083*/

function tabs() {
let tabContent = document.querySelectorAll('.tree, .aluminum, .plastic, .french, .rise'),
    tabBtn = document.querySelectorAll('.slick-slide > a');
    
  [...tabContent, ...tabBtn].forEach(function (tab, index) {
    tab.addEventListener('click', toggleItem.bind(this, tab, tabContent, tabBtn, index));
  });

  function toggleItem(item, tabContent, tabBtn, index) {
    for (let sibling of tabBtn) {
      sibling.classList.remove('active');
    }
    for (let sibling of tabContent) {
      sibling.style.display = 'none';
    }
    item.classList.add('active');
    tabContent[index - 5].style.display = 'block';
  }

}

module.exports = tabs;