/*jshint -W117*/
/*jshint -W083*/

function timer() {
 // let deadline = "December 18 2019 00:00:00";
  let deadline = "2019-12-18";
  let getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60) % 24)),
      days = Math.floor((t / (1000 * 60 * 60 * 24)));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };
  let setClock = (id, endtime) => {
    let timer = document.getElementById(id),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes > span'),
      seconds = timer.querySelector('#seconds > span'),
      t = getTimeRemaining(endtime),
      timeInterval = setInterval(updateClock, 1000);
    if (t.total <= 0) {
      clearInterval(timeInterval);
      days.textContent = '00';
      hours.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';
    } else if (t.total > 0) {
      updateClock();
    }

    function updateClock() {
      let t = getTimeRemaining(endtime);
      if (t.days < 10) {
        days.textContent = ("0" + t.days).slice(-1);
      } else if (t.days < 100) {
        days.textContent = ("0" + t.days).slice(-2);
      } else {
        days.textContent = ("0" + t.days).slice(-3);
      }
      hours.textContent = ("0" + t.hours).slice(-2);
      minutes.textContent = ("0" + t.minutes).slice(-2);
      seconds.textContent = ("0" + t.seconds).slice(-2);
    }
  };

  setClock('timer', deadline);

}

module.exports = timer;