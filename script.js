const calculatorScreen = document.querySelector('.calculator-screen')
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        if (currentNumber === '0'){
            currentNumber = event.target.value
        } else {
            currentNumber += event.target.value
        }
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})

const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
      case "+":
        result = parseFloat(prevNumber) + parseFloat(currentNumber)
        break
      case "-":
        result = parseFloat(prevNumber) - parseFloat(currentNumber)
        break
      case "*":
        result = parseFloat(prevNumber) * parseFloat(currentNumber)
        break
      case "/":
        result = parseFloat(prevNumber) / parseFloat(currentNumber)
        break
      default:
        break
    }
    currentNumber = result
    calculationOperator = ''
  }

  const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', () => {
    calculatePercentage();
    updateScreen(currentNumber);
});

const calculatePercentage = () => {
    currentNumber = ((parseFloat(currentNumber) / 100) * parseFloat(prevNumber)).toString();
}

  
  
  const clearBtn = document.querySelector('.all-clear')

  const clearAll = () => {
    prevNumber = ''
    currentNumber = '0'
    calculationOperator = ''
  }

  clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
  })

  inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
      return;
    }
    currentNumber += dot;
  }

  const decimal = document.querySelector('.decimal');

  decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
  });
  
 



 