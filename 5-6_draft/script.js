"use strict";
const $time = document.querySelector('#time');
const $start = document.querySelector('#start');
const $pause = document.querySelector('#pause');
const $reset = document.querySelector('#reset');
const $stop = document.querySelector('#stop');

const timer = createTimer();

$start.addEventListener('click', timer.start);
$pause.addEventListener('click', timer.pause);
$reset.addEventListener('click', timer.reset);
$stop.addEventListener('click', timer.stop);

function updateTime (time) {
  $time.innerText = time;
}

function createTimer () {
	
  
  function start () {
    var savedTime = 0;
     time = setInterval(function(){
    	var prevTime = Date.now();
    	var interval = Date.now() - prevTime;
    	savedTime = savedTime + interval;},1) 
    }
  
  }
  function pause () {
    
  }
  function reset () {}