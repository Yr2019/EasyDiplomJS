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

  let modal = require('./parts/modal.js'),
      form = require('./parts/form.js'),
      tabs = require('./parts/tabs.js'),
      tabsdesign = require('./parts/tabsdesign.js'),
      timer = require('./parts/timer.js'),
      calc = require('./parts/calc.js');
  //     
  //     slider = require('./parts/slider.js'),
    
    modal();
    form();
    tabs();
    tabsdesign();
    timer();
    calc();
  // 
  // slider();
    
    
    

});
