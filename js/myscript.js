/* PALINDROMA */

const userWord = prompt("Inserisci una parola.").toLowerCase();

if (palindrome(userWord) === true) {
    console.log(userWord + ", la parola da te inserita, è palindroma.");
} else {
    console.log(userWord + ", la parola da te inserita, non è palindroma.");
}


/* PARI E DISPARI */

let userChoice = prompt('Inserisci pari o dispari.').toLowerCase();

while (userChoice !== "pari" && userChoice !== "dispari") {
    userChoice = prompt('La tua scelta non è valida. Inserisci pari o dispari.')
}

let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5.'));

while (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
    userNumber = parseInt(prompt('Il numero inserito non è valido. Inserisci un numero da 1 a 5.'));
}

const opponentNumber = getRandomNumber(1, 5);
const sum = getSum(userNumber, opponentNumber);

let finalNumberType;

if (evenOdd(sum) === "odd") {
    finalNumberType = "dispari";
} else {
    finalNumberType = "pari";
}

if (userChoice === finalNumberType) {
    console.log("Hai indovinato! Hai selezionato " + userChoice + ", la somma del tuo numero " + userNumber + " e di quello avversario " + opponentNumber + " è " + sum + " ed è " + finalNumberType + ".");
} else {
    console.log("Non hai indovinato. Hai selezionato " + userChoice + ", la somma del tuo numero " + userNumber + " e di quello avversario " + opponentNumber + " è " + sum + " ed è " + finalNumberType + ".");
}

/* FUNCTIONS */

/**
 * This function checks whether the parameter word is a palindrome or not.
 * @param {*} word The word you wish to check.
 * @returns true if the word is a palindrome, false otherwise.
 */
function palindrome(word) {
    let decomposedWord = ' ';
    let decomposedWordReverse = ' ';

    for (let i = 0; i < word.length; i++) {
        decomposedWord += word.charAt(i);
    }

    for (let j = (word.length - 1); j >= 0; j--) {
        decomposedWordReverse += word.charAt(j);
    }

    if (decomposedWord === decomposedWordReverse) {
        return true;
    } else {
        return false;
    }
}

/**
 * This function returns a random number between the min and max parameters (included).
 * @param {*} min The smallest possible random number.
 * @param {*} max The biggest possible random number.
 * @returns A random number between the parameters.
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * This function sums the two parameter numbers.
 * @param {*} firstNumber The first number to sum.
 * @param {*} secondNumber The second number to sum.
 * @returns The sum of the two numbers.
 */
function getSum(firstNumber, secondNumber) {
    const sum = firstNumber + secondNumber;
    return sum;
}

/**
 * This function checks if the parameter number is even or odd.
 * @param {*} number The number to check.
 * @returns "odd" if the number is odd, "even" otherwise.
 */
function evenOdd(number) {
    if ((number % 2) != 0) {
        return "odd";
    } else {
        return "even";
    }
}