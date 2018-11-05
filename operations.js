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
	if (b === 0){
		alert("Can't divide by zero!");
		return "Can't divide by zero!";
	}
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

	const equals = document.querySelector('.equals');
	equals.addEventListener('click', calculateResult);
}

function updateText(e){
	let text = document.querySelector('.calculator-display');
	text.value += e.target.value;
}

function clearText(){
	let text = document.querySelector('.calculator-display');
	text.value = "";
}

function calculateResult(e){
	let text = document.querySelector('.calculator-display');
	const expression = text.value;
	text.value = parseExpression(expression);
}

/* TODO
1. Trasformare l'espressione da stringa ad array
2. Elaborare l'espressione, ricordando l'ordine degli operatori
3. Ritornare il risultato dell'espressione
*/
function parseExpression(expr){

}