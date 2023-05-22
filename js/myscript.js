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

let userNumber = prompt('Inserisci un numero da 1 a 5.')
console.log(userChoice, userNumber);

while (userNumber < 1 || userNumber > 5) {
    userNumber = prompt('Il numero inserito non è valido. Inserisci un numero da 1 a 5.')
}

const opponentNumber = getRandomNumber(1, 5);
console.log(opponentNumber);


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
    return Math.floor(Math.random() * (max - min) + min);
}


function evenOdd(number) {
    if ((userNumber % 2) != 0) {
        return "odd";
    } else {
        return "even"
    }
}