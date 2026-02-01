//Clears the calculator display
function clearScreen() {
    document.getElementById("result").value="";
}

//Appends the clicked button's value to display
function setScreenValue() {
    document.getElementById("result").value+= value;
}

//Calculates and displayes the result
function calculateResult() {
    const resultElement= document.getElementById("result");
    const expression= resultElement.value.trim();
}

//Check for empty input
if (expression==='') {
    resultElement.value= 'Enter an expression';
    result;
}

//Evaluate expression and handle errors
try {
    resultElement.value = eval (expression);
} catch (e) {
    resultElement.value = 'Invalid expression';
}