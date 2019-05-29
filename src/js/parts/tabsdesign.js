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