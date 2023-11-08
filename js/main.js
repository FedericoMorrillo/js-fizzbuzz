// dichiarazioni variabili
const fizz = "Fizz"
const buzz = "Buzz"
const fizzbuzz = "FizzBuzz"

// ciclo per generare i numeri da 1 a 100
for (let i = 1; i < 101; i++) {
    console.log(i);

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