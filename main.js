// // basic operation functions //

// function add(a,b){
//   return (a + b);
// }

// function substract(a,b){
//   return (a - b);
// }

// function multiply(a,b){
//   return (a * b);
// }

// function divide(a,b){
//   if (b === 0) {
//     console.log("Impossible to divide by 0 !\nPlease enter another number");
//     alert("Error : Impossible to divide by 0 !\nPlease enter another number");
//   }
//   else{
//     return (a/b);
//   }
// }

// // ---------------------------------------------------

// function operate(operator, a, b){
//   switch (operator){
//     case '+':
//       result = add(a,b);
//       console.log(result);
//       break;
//     case '-':
//       result = substract(a,b);
//       console.log(result);
//       break;
//     case 'x':
//       result = multiply(a,b);
//       console.log(result);
//       break;
//     case '/':
//       result = divide(a,b);
//       console.log(result);
//   }
//   return result;
// }

// // display function //

// function display(){

//   let a ='';
//   let b ='';
//   let operator = '';
//   let input ='';

//   const buttons = document.querySelectorAll("button");
//   buttons.forEach((button)=>{
//     button.addEventListener('click',()=>{
//       let displayValue = button.value;
//       let screen = document.getElementById('display');

//       if (displayValue === "+" ||displayValue === "-"
//           || displayValue === "x" ||displayValue === "/" ){
//             a = input;
//             operator = displayValue;
//             input = "";
//             console.log(operator);
//       }
//       else if (displayValue === "."){
//         if (input.includes(".")){
//           alert("Error : Only one decimal point is allowed in a number");
//         }
//         else if (input.includes(".")){
//           alert("Error : Only one decimal point is allowed in a number");
//         }
//         else{
//           input += displayValue;
//         }
//       }
//       // DEL //
//       else if (displayValue === ""){
//         input = input.slice(0,-1);
//         console.log(input);
//       }
//       else if (displayValue === "clear") {
//         a = "";
//         b = "";
//         operator = "";
//         input = "";
//         screen.textContent = "";
//       }

//       else if (displayValue === "="){
//         b = input;
//         if (a === "" || operator === "") {
//           alert('Error: Please be sure to enter a number and an operator first');
//         } else {
//           input = operate(operator, parseFloat(a), parseFloat(b)).toFixed(2);
//           screen.textContent = input;
//         }
//       }
//       else {
//         input += displayValue;
//       }
//       screen.textContent = input;
//       console.log(input);
//     });
//   });
// }
// display();

const numbers = document.querySelectorAll("[data-number]");
const operations = document.querySelectorAll("[data-operation]");
const currentOperandText = document.querySelector("[data-current-operand]");
const deleteButton = document.querySelector("[data-delete]");
const reset = document.querySelector("[data-reset]");
const equal = document.querySelector("[data-equal]");
const dot = document.querySelector("[data-dot]");

let currentOperand = '';
let previousOperand = '';
let operation = undefined;


numbers.forEach(button => {
    button.addEventListener("click" , () => {
        console.log(button)
        if(currentOperand == '' && button.textContent == 0){
            currentOperandText.textContent = currentOperandText.textContent;
            alert("You cannot divide any number to zero!")
        }else{
            currentOperandText.textContent += button.innerText;
            currentOperand += button.innerText;
                console.log("c" + currentOperand)
                console.log("p" + previousOperand)
        }
    })
})

operations.forEach(button => {
    button.addEventListener("click", () => {
        if(currentOperandText.textContent.charAt(currentOperandText.textContent.length - 1) == "+" ||
            currentOperandText.textContent.charAt(currentOperandText.textContent.length - 1) == "×" ||
            currentOperandText.textContent.charAt(currentOperandText.textContent.length - 1) == "-" ||
            currentOperandText.textContent.charAt(currentOperandText.textContent.length - 1) == "/")
        {
            operations.disabled = true;
        }else if(currentOperand == "" && button == undefined){
            operations.disabled = true;
        }else if(currentOperand == ""){
            operations.disabled = false;
            operationSelect(operation);
            currentOperandText.textContent += button.innerText;
            operation = button.innerText;
        }else{
            operationSelect(operation);
            currentOperandText.textContent += button.innerText;
            operation = button.innerText;
        }

    })
})

let operationSelect = function(operation){
    if(previousOperand !== ""){
        console.log(operation);
        operate(operation);
    }else{
        previousOperand += currentOperand;
        currentOperand="";
    }
}

let operate = function(operation){
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    let result;
    if(isNaN(prev) || isNaN(current)) return;

    switch(operation){
        case "+":
            result = prev + current
            break;
        case "-":
          
            result = prev - current
            break;
        case "×":
            result = prev * current
            break;
        case "/":
            if(current == 0){
                alert("You can not divide this number to zero!")
                currentOperandText.textContent = "";
                currentOperand = "" ;
                previousOperand = "";
            }else{
                result = prev / current
            }
            break;
        default:
            return;
    }

    if(current !== 0 && result % 1 ===0){
        previousOperand = result;
    }else{
        previousOperand = result.toFixed(2)
    }

    currentOperandText.textContent = previousOperand;
    currentOperand = "";
    operations.disabled = false;
    console.log("pt" + previousOperand)
    console.log(operations)
}

equal.addEventListener("click", () => {
    if(currentOperand !== ""){
        currentOperandText.textContent = previousOperand;
    }else if(currentOperand == ""){
        alert("you need to calculate a valid operation")
    }
    operate(operation);
})

deleteButton.addEventListener("click", () => {
    deleteElement();
})

let deleteElement = function(){
    let newDisplay = currentOperandText.textContent.slice(0, currentOperandText.textContent.length - 1);
    currentOperandText.textContent = newDisplay;

    if(currentOperand !== ""){
        currentOperand = currentOperand.slice(0, currentOperand.length - 1);
        console.log("c" + currentOperand);
    }else if(operation !== ""){
        operation = operation.slice(0, operation.length - 1)
        operations.disabled = false;
        console.log(operation)
    }else if(previousOperand !== ""){
        console.log("p" + previousOperand);
        previousOperand = previousOperand.slice(0, previousOperand.length - 1);
    }else if(currentOperandText.textContent == ""){
        currentOperand = "";
        previousOperand = "";
    }
}

reset.addEventListener("click", () => {
    clearAll();
})


let clearAll = function(){
    currentOperandText.textContent = "";
    currentOperand = "";
    previousOperand = "";
    operation = "";
}

dot.addEventListener("click", () => {
    currentOperandText.textContent += ".";
})
