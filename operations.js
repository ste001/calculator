initListeners();

function add (a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide (a, b){
    return a / b;
}

function operate(operator, a, b){
    switch (operator){
		case '+':
			add(a, b);
			break;
		case '-':
			subtract(a, b);
			break;
		case '*':
			multiply(a, b);
			break;
		case '/':
			divide(a, b);
			break;
		default:
			break;
    }
}

function initListeners(){
	const numbers = document.querySelectorAll('.number');
	numbers.forEach(number => number.addEventListener('click', updateText));

	const operations = document.querySelectorAll('.operation');
	operations.forEach(operation => operation.addEventListener('click', updateText));

	const clear = document.querySelector('.clear');
	clear.addEventListener('click', clearText);
}

function updateText(e){
	let text = document.querySelector('.calculator-display');
	text.value += e.target.value;
}

function clearText(e){
	let text = document.querySelector('.calculator-display');
	text.value = "";
}