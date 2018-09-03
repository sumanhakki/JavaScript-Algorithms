//ES6 with a variable defined
let fullName = (firstName, lastName) => {
  const intro = "Hi...my name is ".concat(firstName + " " + lastName);
  return intro;
};
console.log(fullName("hakki", "suman"));

//ES6 a little more streamlined
let firstAndLastNames = (fName, lName) =>
  "Hi..my name is ".concat(fName, " ", lName);

console.log(firstAndLastNames("Hakki", "Suman"));

//ES6 with template literals
let introduction = (fName, lName) => {
  `Hi my name is ${fName} ${lName}.`;
};

console.log(introduction("Hakki", "Suman"));
