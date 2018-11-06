initListeners();

function add (a, b){
    return (parseInt(a) + parseInt(b)).toString();
}

function subtract(a, b){
    return (parseInt(a) - parseInt(b)).toString();
}

function multiply(a, b){
    return a * b;
}

function divide (a, b){
	if (b === '0'){
		alert("Can't divide by zero!");
		return "Can't divide by zero!";
	}
    return (Math.round(parseInt(a) / parseInt(b))).toString();
}

function operate(operator, a, b){
	let result = 0;
    switch (operator){
		case '+':
			result = add(a, b);
			break;
		case '-':
			result = subtract(a, b);
			break;
		case '*':
			result = multiply(a, b);
			break;
		case '/':
			result = divide(a, b);
			break;
		default:
			break;
	}
	return result;
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
	if (text.value === "")
		return;
	else {
		const expression = text.value;
		text.value = parseExpression(expression);
	}
}

/* TODO
1. Trasformare l'espressione da stringa ad array
2. Elaborare l'espressione, ricordando l'ordine degli operatori
3. Ritornare il risultato dell'espressione
*/
function parseExpression(expr){
	let exprArray = expr.trim().replace(/\s/gi, "")
			.split("");

	// Metto insieme i numeri di due o più cifre per evitare errori
	// in fase di calcolo
	for (let i = 0; i < exprArray.length; i++){
		if ((isNumber(exprArray[i])) && isNumber(exprArray[i-1])){
			const number = exprArray[i-1] + exprArray[i];
			exprArray.splice(i-1, 2, number);
			i = i-1;
		}
	}

	// Controllo se ci sono * e /, per la precedenza degli operatori
	for (let i = 0; i < exprArray.length; i++){
		if (exprArray[i] === '*' || exprArray[i] === '/'){
			const result = operate(exprArray[i], exprArray[i-1], exprArray[i+1]);
			exprArray.splice(i-1, 3, result);
			i = i-1;
		}
	}

	// Controllo se ci sono + e -, per la precedenza degli operatori
	for (let i = 0; i < exprArray.length; i++){
		if (exprArray[i] === '+' || exprArray[i] === '-'){
			const result = operate(exprArray[i], exprArray[i-1], exprArray[i+1]);
			exprArray.splice(i-1, 3, result);
			i = i-1;
		}
	}

	return parseInt(exprArray.join(""));
}

function isNumber(string){
	return string >= '0' && string <= '9';
}