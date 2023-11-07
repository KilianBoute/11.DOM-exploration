const calculations = [];
let operandPrevious = 0;
let operandCurrent = 0;
let currentOperator = "";

const main = document.querySelector('main');

const calculator = document.createElement('div');
    calculator.className = 'calculator';

const calculatorDisplay = document.createElement('div');
    calculatorDisplay.className = 'calculator-display';

const displayPrevious = document.createElement('p');
    calculatorDisplay.appendChild(displayPrevious);
    displayPrevious.style.height = "1rem";

const displayCurrent = document.createElement('p');
    displayCurrent.style.height = "1rem";
    calculatorDisplay.appendChild(displayCurrent); 

const calculatorBody = document.createElement('div');
    calculatorBody.className = 'calculator-body';

    const calculatorButtonNumbers = document.createElement('div');
        calculatorBody.className = 'calculator-button-numbers';
    const calculatorButtonOperators = document.createElement('div');
        calculatorBody.className = 'calculator-button-operators';

const makeCalculatorButton = (content, className, buttonFunction, appendTo) => {
    const calculatorButton = document.createElement('button');
    calculatorButton.className = className;
    calculatorButton.textContent = content;
    calculatorButton.addEventListener('click', buttonFunction);

    // Temp style alterations:
    calculatorButton.style.width = "2rem";
    calculatorButton.style.height = "2rem";
    calculatorButton.style.margin = "5px 5px";

    appendTo.appendChild(calculatorButton);
}

const clickNumber = (e) => {
    displayCurrent.textContent += e.target.textContent;
}

const clickOperator = (e) => {
    operandPrevious = parseFloat(displayCurrent.textContent);
    displayPrevious.textContent = operandPrevious;

    currentOperator = e.target.textContent;
    displayCurrent.textContent = currentOperator + " ";
}

const clickResult = () => {
    operandCurrent = parseFloat(displayCurrent.textContent.replace(/\D/g, ""));
    let result = operandPrevious + currentOperator + operandCurrent;
    displayPrevious.textContent = displayCurrent.textContent;
    displayCurrent.textContent = result;
}

const makeCalculatorBody = () => {
    for (i = 0; i <= 9; i++) {
        makeCalculatorButton(i, 'calculator-button-number', clickNumber, calculatorButtonNumbers);
    }

    makeCalculatorButton("+", 'calculator-button-plus', clickOperator, calculatorButtonOperators);
    makeCalculatorButton("-", 'calculator-button-minus', clickOperator, calculatorButtonOperators);
    makeCalculatorButton("x", 'calculator-button-multiplication', clickOperator, calculatorButtonOperators);
    makeCalculatorButton("/", 'calculator-button-division', clickOperator, calculatorButtonOperators);
    makeCalculatorButton("=", 'calculator-button-equals', clickResult, calculatorButtonOperators);
}

makeCalculatorBody();

calculator.appendChild(calculatorDisplay);
calculatorBody.appendChild(calculatorButtonNumbers);
calculatorBody.appendChild(calculatorButtonOperators);
calculator.appendChild(calculatorBody);
main.appendChild(calculator);


// Temp style alterations:
main.style.width = "210px";
calculatorDisplay.style.minHeight = "2rem";
calculatorDisplay.style.margin = "5px";
calculatorDisplay.style.paddingRight = "8px";
calculatorDisplay.style.border = "1px solid gray";
calculatorDisplay.style.textAlign = "right";

