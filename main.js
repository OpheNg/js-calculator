// operation functions //

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

// operate //

function operate(operator, a, b){
  switch (operator){
    case '+':
      result = add(a,b);
      console.log(result);
      break;
    case '-':
      result = substract(a,b);
      console.log(result);
      break;
    case '*':
      result = multiply(a,b);
      console.log(result);
      break;
    case '/':
      result = divide(a,b);
      console.log(result);
  }
  return result;
}

// display function //

function display(){

  let a ='';
  let b ='';
  let operator = '';
  let input ='';
  
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
      let displayValue = button.value;
      let screen = document.getElementById('display');

      if (displayValue === "+" ||displayValue === "-"
          || displayValue === "x" ||displayValue === "/" ){
            operator = displayValue;
            a = input;
            input = "";
          }
      else if (displayValue === "="){
        b = input;
        input = operate(operator, parseInt(a), parseInt(b));
        screen.textContent = input;
      }
      else {
        input += displayValue;
      }
      screen.textContent = input;
      console.log(input);
    });
  });
}


display();
