//Fizz Buzz solution with ternary operator instead of if else statements
let FizzBuzz = num =>
    (num % 15 == 0 ? 'Fizz Buzz' : (num % 3 == 0 ? 'Fizz' : (num % 5 == 0 ? 'Buzz' : 'Nope')));

console.log(FizzBuzz(4));

//Fizz Buzz solution with a range of numbers
for (i = 0; i <= 20; i++) {
    console.log(i, (i % 15 == 0 ? 'Fizz Buzz' : (i % 3 == 0 ? 'Fizz' : (i % 5 == 0 ? 'Buzz' : 'Nope'))));
}