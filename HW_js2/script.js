var arr = [];
for (var i=0; i < 5; i++) {
	arr[i] = prompt("please enter user's name", "");
}
console.log(arr);

var user = prompt("please enter your name", "");

for (var i=0; i < 5; i++) {
	if (user == arr[i]) {
		alert(user + ", you entered successfuly"); break } 
		else {
			alert("name error"); break
		}
	}


