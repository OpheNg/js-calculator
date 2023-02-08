function add(a,b){
  return (a + b);
}

function substract(a,b){
  return (a - b);
}

function multiply(a,b){
  return (a * b);
}

function divide(a,b){
  if (b === 0) {
    console.log("Impossible to divide by 0 !\nPlease enter another number");
    alert("Impossible to divide by 0 !\nPlease enter another number");
  }
  else{
    return (a/b);
  }
}

function operate(operator, a, b){
  switch (operator){
    case '+':
      add(a,b);
      break;
    case '-':
      substract(a,b);
      break;
    case '*':
      multiply(a,b);
      break;
    case '/':
    divide(a,b);
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
  button.addEventListener('click',()=>{
    let displayValue = button.value;
    console.log(displayValue);
  });
});
