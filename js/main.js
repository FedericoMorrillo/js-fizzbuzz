'use strict'

// dichiarazioni variabili
const fizz = "Fizz"
const buzz = "Buzz"
const fizzbuzz = "FizzBuzz"

const elementUl = document.querySelector("ul.list")


// ciclo per generare i numeri da 1 a 100
for (let i = 1; i < 101; i++) {
    console.log(i);
    const elementLi = document.createElement('li')
    elementLi.append(i);
    elementUl.append(elementLi);

    // condizioni per stampare in console fizz, buzz, fizzbuzz
    if (i % 3 === 0) {
        console.log(fizz);
    }
    if (i % 5 === 0) {
        console.log(buzz)
    }
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(fizzbuzz)
    }

}