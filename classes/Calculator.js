class Calculator {
  constructor() {
    this.value = 0;
    this.operation = null;
    this.operand = 0;
  }

  add() {
    this.value += this.operand;
    return this;
  }

  subtract() {
    this.value -= this.operand;
    return this;
  }

  multiply() {
    this.value *= this.operand;
    return this;
  }

  divide() {
    this.value /= this.operand;
    return this;
  }

  modulus() {
    this.value %= this.operand;
    return this;
  }

  power() {
    this.value **= this.operand;
    return this;
  }

  equals() {
    if (this.operation && this.operand) {
      this.calculate();
    }
    this.resetOperation();

    return this;
  }

  resetOperand() {
    this.operand = 0;
    return this;
  }

  resetValue() {
    this.value = 0;
    return this;
  }

  resetOperation() {
    this.operation = null;
    return this;
  }

  resetAll() {
    this.resetValue().resetOperand().resetOperation();
    return this;
  }

  setOperation(operation) {
    this.equals();
    this.operation = operation;
    if (this.operand) {
      this.value = this.operand;
      this.resetOperand();
    }

    return this;
  }

  setOperand(operand) {
    this.operand = operand;
    return this;
  }

  changeSign() {
    this.operand *= -1;
    return this;
  }

  deleteOperand() {
    this.operand = Math.floor(this.operand / 10);
    return this;
  }

  addOperand(number) {
    this.operand = this.operand * 10 + number;
    return this;
  }

  calculate() {
    switch (this.operation) {
      case "+":
        this.add();
        break;
      case "-":
        this.subtract();
        break;
      case "*":
        this.multiply();
        break;
      case "/":
        this.divide();
        break;
      case "=":
        this.equals();
      case "%":
        this.modulus();
        break;
      case "Pow":
        this.power();
        break;
      default:
        break;
    }

    this.resetOperand();

    return this;
  }
}
