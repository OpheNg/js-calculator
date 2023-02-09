// basic operation functions //

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
    alert("Error : Impossible to divide by 0 !\nPlease enter another number");
  }
  else{
    return (a/b);
  }
}

// ---------------------------------------------------

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
    case 'x':
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
      else if (displayValue === "."){
          input += displayValue;
      }

      else if (displayValue === ""){
        a = "";
        b = "";
        operator = "";
        input ="";
      }

      else if (displayValue === "="){
        b = input;
        if (a === "" || operator === "") {
          alert('Error: Please be sure to enter a number and an operator first');
        } else {
          input = operate(operator, parseFloat(a), parseFloat(b)).toFixed(4);
          screen.textContent = input;
        }
      }

      // else if (displayValue === "="){
      //   b = input;
      //   input = operate(operator, parseFloat(a), parseFloat(b));
      //   screen.textContent = input;
      // }

      // else if (displayValue === "=" && a==="" && b===""){
      //   alert('Error: Please be sure to enter a number and an operator first');
      // }

      else {
        input += displayValue;
      }
      screen.textContent = input;
      console.log(input);
    });
  });
}
display();


// WHAT'S LEFT TO DO //

//1) fix the code to make decimal work

//2) Clear result before new operation

//3) implement DEL function

//4) Keyboard
