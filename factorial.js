//ES6 Factorialize any number with simple logic
let factorializeNumber = num => {
    let product = 1;
    for (i = 2; i <= num; i++) {
        product *= i;
    }
    return product
}

console.log(factorializeNumber(2))