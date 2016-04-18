var affichage = document.getElementById('zoneSaisie');
var button = document.getElementsByTagName('button');
var operators = '+-*/';
var op = [];

for (var i = 0; i < button.length; i++) {
	var touch = button[i];
	touch.addEventListener('click', function(e) {
		if (e.path[0].value != '=') {
			affichage.value += e.path[0].value;
			// console.log(e.path[0].value);
			if (operators.indexOf(e.path[0].value) >= 0) {
				// console.log(e.path[0].value);
				op.push(e.path[0].value)
			}; 
		} else {
			// console.log(op);
			affichage.value = result(affichage.value);
		}
		
	})
};

result = function (str) {
	var ope = op[0];
	// console.log(ope);
	switch (ope){
		case '+':
			numbers = str.trim().split('+');
			// console.log(numbers);
			return parseInt(numbers[0]) + parseInt(numbers[1]);
		case '-':
			numbers = str.trim().split('-');
			return parseInt(numbers[0]) - parseInt(numbers[1]);
		case '*':
			numbers = str.trim().split('*');
			return parseInt(numbers[0]) * parseInt(numbers[1]);
		case '/':
			numbers = str.trim().split('/');
			return parseFloat(numbers[0]) / parseFloat(numbers[1]);
		default :
			return '';
	}
}

var resetBt = document.getElementById('resetButton');
resetBt.addEventListener('click', function () {
	affichage.value = '';
	op = [];
})