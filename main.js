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
      console.log(addResult);
      break;
    case '-':
      result = substract(a,b);
      console.log(subResult);
      break;
    case '*':
      result = multiply(a,b);
      console.log(multiResult);
      break;
    case '/':
      result = divide(a,b);
      console.log(divideResult);
  }
  return result;
}

// display function //

function display(){
  let input ='';
  let first = '';
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
      let displayValue = button.value;
      let screen = document.getElementById('display');

      if (displayValue === "+" ||displayValue === "-"
          || displayValue === "x" ||displayValue === "/" ){
            input = "";
          }
      else {
        input += displayValue;
      }
      screen.textContent = input;
      // screen.textContent = (displayValue);
      // console.log(displayValue);
    });
  });
}

// link buttons to a & b ??? //
display();
