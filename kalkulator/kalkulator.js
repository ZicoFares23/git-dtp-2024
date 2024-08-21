function getOperation() {
    const operation = prompt("Pilih operasi: +, -, *, /");
    return operation;
}

function getNumbers() {
    const num1 = parseFloat(prompt("Enter Nomer Pertama:"));
    const num2 = parseFloat(prompt("Enter Nomer Kedua:"));
    return { num1, num2 };
  }

  function calculator(operation, num1, num2) {
    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        
        if (num2 === 0) {
          return "Cannot divide by zero";
        }
        return num1 / num2;
      default:
        return "Invalid operation";
    }
  }

  function runCalculator() {
    const operation = getOperation();
    const { num1, num2 } = getNumbers();
    const result = calculate(operation, num1, num2);
    alert(`Result: ${hasil}`);
  }