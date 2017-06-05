const $time = document.querySelector('#timer1 #time');
const $start = document.querySelector('#timer1 #start');
const $stop = document.querySelector('#timer1 #stop');
const $watch = document.querySelector('#timer1 #watch');


var timer = createTimer(
  function(time) {
    
    $time.innerText = time;
  },

  function (isRunning) {
    $start.innerText = isRunning ? 'pause' : 'start';
  }
);

$start.addEventListener('click', timer.startPause);
$stop.addEventListener('click', timer.stop);

function createTimer (onTimeChange, onStateChange) {
  var time;
  var diff = 0;
  var interval;
  var isRunning;
  var hours = 0;
  var minutes = 0;
  var seconds = 0; 
  var secRes = 0;
  var minRes = 0;
  var houRes = 0;
  
  
  function changeRunningState (newState) {
    isRunning = newState;
    onStateChange(isRunning);
  }
  
  function startPause () {
    if (isRunning) {
      pause();
    } else {
      start();
    }
  }
  
  function start () {
    if (isRunning) return;
    changeRunningState(true);
    time = Date.now();
    interval = setInterval(tick, 1);
    $start.style.backgroundColor = "blue";
  }
  
  function pause () {
    changeRunningState(false);
    clearInterval(interval);
    $start.innerText = "continue";
    $start.style.backgroundColor = "green";
  }

  function reset () {
    diff = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    $watch.innerText = "0" + hours  + ":" + "0" + minutes + ":" + "0"  + seconds;
    onTimeChange(diff);
  }
  
  function stop () {
    pause();
    reset();
    $start.innerText = "start";
    $time.innerText = "000"
  }

  function tick () {
    var delta = Date.now() - time;
    diff = diff + delta;
    onTimeChange(diff);
    time = Date.now();
    $watch.innerText = hours + ":" + minutes + ":" + seconds;
    if (diff > 999) {seconds++; diff = diff - 1000}
    if (seconds > 59) {minutes++; seconds = seconds - 60}
    if (minutes > 59) {hours++; minutes = minutes - 60}
    if (seconds < 10) {secRes = "0" + seconds; 
    $watch.innerText = hours + ":" + minutes + ":" + secRes;
      } else if (seconds>=10) {secRes = seconds}
      if (minutes < 10) {minRes = "0" + minutes; 
    $watch.innerText = hours + ":" + minRes + ":" + secRes; 
      } else if (minutes>=10) {minRes = minutes}
      if (hours < 10) {houRes = "0" + hours; 
      $watch.innerText = houRes + ":" + minRes + ":" + secRes;}
  }
    
  return {
    startPause: startPause,
    reset: reset,
    stop: stop
  };
}