function increaseBalance(x, y) {
  x = x + y;
  return x;
}

// y was not defined
function decreaseBalance(x, y) {
x = x - y;
return x;
}

// после return никакой код выполняться не будет

function divideBalanceByAccounts(x, y) {
  x = x / y;
  console.log("x");
  return x;
}

function getRestAfterDivision(x, y) {
  x = x % y;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2)); // в функции 2 параметра 
console.log(getRestAfterDivision(7000, 3));
