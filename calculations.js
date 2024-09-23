function increaseBalance(x, y) {
  x += y;
  return x;
}

// y was not defined
function decreaseBalance(x, y) {
x -= y;
return x;
}

function divideBalanceByAccounts(x, y) {
  x /= y;
  console.log("x");
  return x;
}

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
console.log(getRestAfterDivision(7000, 3));

// HW2.2.4

function getRestforIncrement (x) {
    x ++;
    return x;
  }

function getResultforDecrement (y){
    y --;
    return y;
}

console.log(getRestforIncrement(76)); // 77
console.log(getResultforDecrement(34)); // 33
