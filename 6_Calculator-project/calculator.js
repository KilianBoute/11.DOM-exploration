const calculations = [];

const main = document.querySelector('main');

const calculator = document.createElement('div');
    calculator.className = 'calculator';

const calculatorDisplay = document.createElement('span');
    calculatorDisplay.className = 'calculator-display';

const calculatorBody = document.createElement('div');
    calculatorBody.className = 'calculator-body';

const makeCalculatorButton = (content, className, buttonFunction) => {
    const calculatorButton = document.createElement('button');
    calculatorButton.className = className;
    calculatorButton.textContent = content;
    calculatorButton.addEventListener('click', buttonFunction);

    calculatorBody.appendChild(calculatorButton);
}

const clickNumber = (e) =>{
    calculatorDisplay.textContent += e.target.textContent;
}

const makeCalculatorBody = () => {
    for (i = 0; i <= 9; i++) {
        makeCalculatorButton(i, 'calculator-button-number', clickNumber);
    }

    makeCalculatorButton("+", 'calculator-button-plus');
    makeCalculatorButton("-", 'calculator-button-minus');
    makeCalculatorButton("x", 'calculator-button-multiplication');
    makeCalculatorButton("/", 'calculator-button-division');
    makeCalculatorButton("=", 'calculator-button-equals');
}

makeCalculatorBody();

calculator.appendChild(calculatorDisplay);
calculator.appendChild(calculatorBody);
main.appendChild(calculator);