'use strict'

// dichiarazioni variabili
const fizz = "Fizz"
const buzz = "Buzz"
const fizzbuzz = "FizzBuzz"

const elementUl = document.querySelector("ul.list")


// ciclo per generare i numeri da 1 a 100
for (let i = 1; i < 101; i++) {
    console.log(i);

    // creiamo le liste dentro l' ul nell' html
    let elementLi = document.createElement('li')
    elementLi.append(i);
    elementUl.append(elementLi);

    // condizioni per stampare in console fizz, buzz, fizzbuzz
    if (i % 3 === 0) {
        console.log(fizz);
        elementLi.innerHTML = fizz;
        elementLi.style.backgroundColor = "#00D03B";
    }
    if (i % 5 === 0) {
        console.log(buzz)
        elementLi.innerHTML = buzz;
        elementLi.style.backgroundColor = "#AEFF00";
    }
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(fizzbuzz)
        elementLi.innerHTML = fizzbuzz;
        elementLi.style.backgroundColor = "#C93939";
    }

}