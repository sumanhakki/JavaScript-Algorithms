//ES5 solution using a named function
function addTwoNumbers(num1, num2) {
    return num1 + num2
}
//ES6 solution using an arrow function
let addnum = (num1, num2) => num1 + num2;

console.log(addnum(4, 4));
console.log(addTwoNumbers(2, 4));