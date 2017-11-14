
'use strict';

$(document).ready(function() { // Ждём загрузки страницы	   
	$("input[name=send]").click( function () { // Событие нажатия на кнопку "Расчёт"
		var action = $("select[name=action]").val(); // Получаем значение действия, которое нужно выполнить
		var first = $("input[name=first]").val() * 1; // Переменная первого числа
		var second = $("input[name=second]").val() * 1; // Переменная второго числа
		var result; // Переменная результата

		if ((parseInt(first) != first) || (parseInt(second) != second)) {
			alert ('enter natural number')
		} else { 

		switch(action) {
    case '+':
        result =  plus(first,second);
        break;
    case '-':
        result =  minus(first,second);
        break;
    case '*':
        result =  multiply(first,second);
        break;
    case '/':
        result =  division(first,second);
        break;
	}

	
}
		function plus(a,b) {
				return a + b;
		}
		function minus(a,b) {
				return a - b;
		}
		function multiply(a,b) {
				return a * b;
		}
		function division(a,b) {
				return a / b;
		}

		$("input[name=result]").val(result); // записываем результат
	});
});

