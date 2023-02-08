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
