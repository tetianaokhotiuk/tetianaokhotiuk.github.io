
var hours = 0;
var minutes = 0;
var seconds = 0;
var timer = 0;
var t = 0;



   document.getElementById('time').innerHTML = hours + 
":" + minutes + ":" + seconds;

 document.getElementById('timer').innerHTML = 0;

 function start() {
 	btn.innerHTML = 'PAUSE'
 	// btn.addEventListener('click', pause);
 	timer = new Date().getTime();
 	var interval = setInterval(function(){

 		var t = new Date().getTime() - timer - seconds * 1000
 		 - minutes * 60 * 1000 - hours * 360 * 1000;
 		document.getElementById('timer').innerHTML = t;
 		  document.getElementById('time').innerHTML = hours + 
":" + minutes + ":" + seconds;

 		if (t>999) {seconds++}

 			if (seconds>59) {minutes++; 
 				seconds = 0;}
 			if (minutes>59) {hours++;
 				minutes = 0;}
 				// if (or(seconds < 10), (minutes <10), (hours < 10)) 
     //        	{ document.getElementById('time').innerHTML 
     //        = "0" + hours + ":" + "0" + minutes + ":" + "0" + 
     //        seconds;}
 				btc.addEventListener('click', function(){
clearInterval(interval)});

 	},1);
 }


 			// timer = new Date().getTime();
 	// var t = timer;
//  		document.getElementById('timer').innerHTML = t;
//  		  document.getElementById('time').innerHTML = hours + 
// ":" + minutes + ":" + seconds;
 	// var interval = clearInterval(interval);




var btn = document.createElement('button');
document.body.appendChild(btn);
btn.appendChild(document.createTextNode('START'));
btn.addEventListener('click', start);

var btc = document.createElement('button');
document.body.appendChild(btc);
btc.appendChild(document.createTextNode('STOP'));




 // if (hours < 10) {hours = "0" + hours;}
 //    if (minutes < 10) {minutes = "0" + minutes;}
 //    if (seconds < 10) {seconds = "0" + seconds;}














