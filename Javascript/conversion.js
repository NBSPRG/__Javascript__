let score = 33

console.log(typeof(score));

let numberInString = "33abs";
console.log(typeof(numberInString));
let x = Number(numberInString);
console.log(x);

// This may be a fault in javascript, it does not throw error because it is not a number value;

let isLoggedIn = "chandan";
let bool = Boolean(isLoggedIn);
console.log(bool);

// for bool 1 -> true
//  0 -> false 
// "string " -> true
// "" -> false

let z = 33;
let numInStr = String(33);
console.log(numInStr);

console.table([score, numberInString, x, bool]);