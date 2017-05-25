
var hours = 0;
var minutes = 0;
var seconds = 0;
var timer = 0;
var t = 0;


document.getElementById('time').innerHTML = hours + 
":" + minutes + ":" + seconds;



document.getElementById('start').onclick = 
function(){timer = new Date().getTime()}
document.getElementById('stop').onclick = 
function(){timer = 0}

var interval = setInterval(function(){
    if (timer==0) return;
	var t = (new Date().getTime()-timer - seconds*1000); 
    document.getElementById('timer').innerHTML = 
    (new Date().getTime()-timer- seconds*1000)
},1);

if (t>999) {++seconds;
}





// //     if (hours < 10) hours = "0" + hours;
//     if (minutes < 10) minutes = "0" + minutes;
//     if (seconds < 10) seconds = "0" + seconds;
//   }

