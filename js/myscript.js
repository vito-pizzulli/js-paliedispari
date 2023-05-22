const userWord = prompt("Inserisci una parola.").toLowerCase();

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

if (palindrome(userWord) === true) {
    console.log(userWord + ", la parola da te inserita, è palindroma.");
} else {
    console.log(userWord + ", la parola da te inserita, non è palindroma.");
}