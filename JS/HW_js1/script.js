
function pow(x, n) {
  var result = 1;
  for (var i = 0; i < n; i++) {
    	 result = x * result;
	  	}

  for (var i = 0; i > n; i--) {
		result = result * (1 / x);
  }

  return result;
}

for (var i = 0; parseInt(x) != x; ++i) {
	var x = prompt("Please, enter the number", '');
if (parseInt(x) != x) {
	alert ('enter natural number')
}
}
console.log ( "you enter the number -", x)

for (var i = 0; parseInt(n) != n; ++i) {
	var n = prompt("Please, enter the exponent of a number", '');
if (parseInt(n) != n)  {
	alert ('enter natural number')
}
}
console.log ( "you enter the exponent -", n)

  console.log( "The result is ", pow(x, n) );
  

