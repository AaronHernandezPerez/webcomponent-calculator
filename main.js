const calculator = new Calculator();

function chunkArray(array, size) {
  return array.reduce((acc, _, i) => {
    if (i % size === 0) {
      acc.push(array.slice(i, i + size));
    }

    return acc;
  }, []);
}

const buttonContainer = document.getElementById("button-container");
const topOperationsContainer = document.getElementById(
  "top-operations-container"
);
const operationsContainer = document.getElementById("operations-container");
const displayValue = document.getElementById("value");
const displayOperation = document.getElementById("operation");
const displayOperand = document.getElementById("operand");

function updateScreen() {
  displayValue.innerHTML = calculator.value;
  displayOperation.innerHTML = calculator.operation;
  displayOperand.innerHTML = calculator.operand;
}

updateScreen();

const changeSignButton = document.createElement("cal-button");
changeSignButton.innerHTML = "+/-";
changeSignButton.addEventListener("click", () => {
  calculator.changeSign();
  updateScreen();
});
buttonContainer.append(changeSignButton);

const buttons = Array.from({ length: 10 }, (_, i) => {
  const button = document.createElement("cal-button");
  button.innerHTML = i;
  button.addEventListener("click", () => {
    calculator.addOperand(i);
    updateScreen();
  });

  return button;
});

const button0 = buttons.shift();
buttonContainer.append(button0);

const deleteButton = document.createElement("cal-button");
deleteButton.setAttribute("type", "danger");
deleteButton.innerHTML = "DEL";
deleteButton.addEventListener("click", () => {
  calculator.deleteOperand();
  updateScreen();
});

buttonContainer.append(deleteButton);

chunkArray(buttons, 3).map((row) => {
  row.reverse().forEach((button) => buttonContainer.prepend(button));
});

const operationButtons = ["+", "-", "*", "/"].map((operation) => {
  const button = document.createElement("cal-button");
  button.setAttribute("type", "accent");
  button.innerHTML = operation;
  button.addEventListener("click", () => {
    calculator.setOperation(operation);
    updateScreen();
  });

  operationsContainer.append(button);
  return button;
});

const operationButtons2 = ["%", "Pow"].map((operation) => {
  const button = document.createElement("cal-button");
  button.setAttribute("type", "accent");
  button.innerHTML = operation;
  button.addEventListener("click", () => {
    calculator.setOperation(operation);
    updateScreen();
  });

  topOperationsContainer.append(button);
  return button;
});

const resetButton = document.createElement("cal-button");
resetButton.innerHTML = "C";
resetButton.setAttribute("type", "warning");
resetButton.addEventListener("click", () => {
  calculator.resetAll();
  updateScreen();
});

topOperationsContainer.append(resetButton);

const equalsButton = document.createElement("cal-button");
equalsButton.setAttribute("type", "warning");
equalsButton.innerHTML = "=";
equalsButton.addEventListener("click", () => {
  calculator.equals();
  updateScreen();
});

topOperationsContainer.append(equalsButton);
