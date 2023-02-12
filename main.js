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
        if(currentOperand == '' && button.textContent == 0 && previousOperand == ""){
            currentOperandText.textContent = currentOperandText.textContent;
            alert("You cannot start with zero!")
            operate(operation);
        }else{
            currentOperandText.textContent += button.innerText;
            currentOperand += button.innerText;
                console.log("c" + currentOperand)
                console.log("p" + previousOperand)
                dot.disabled = false;
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
        separateNumber();
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
            if(current == ""){
                alert("You can not divide this number to zero!")
                currentOperandText.textContent = "";
                currentOperand = "" ;
                previousOperand = "";
                operation="";
            }else{
                result = prev / current
            }
            break;
        default: 
            return;
    }

    if( result % 1 ===0){
        previousOperand = result;
    }else{
        previousOperand = result.toFixed(2);
    }

    currentOperandText.textContent = previousOperand;
    currentOperand = "";
    operations.disabled = false;
    console.log("pt" + previousOperand)
    console.log(operations)
}

equal.addEventListener("click", () => {
    if(currentOperand !== "" && previousOperand == ""){
        alert("you need to calculate a valid operation")
    }else if(currentOperand == ""){
        alert("you need to calculate a valid operation")
    }else if(previousOperand == ""){
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
    dot.disabled = false;
}

dot.addEventListener("click", () => {
    inportDot();
})

let inportDot = function(){
    if(currentOperand == ""){
        dot.disabled = true;
    }else if(currentOperand !== "" && !currentOperandText.textContent.includes(".")){
        currentOperandText.textContent += ".";
        dot.disabled = false;
        }
}

let separateNumber = function(){
    let decimalNumber = currentOperandText.textContent;
    console.log(decimalNumber)
    let splitDec = decimalNumber.split(".")[0];
    let splitDecSecond = decimalNumber.split(".")[1];
    let actualNumber = `${splitDec}.${splitDecSecond}`
    previousOperand = actualNumber;
}

