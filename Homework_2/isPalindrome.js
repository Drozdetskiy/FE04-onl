function isPolindrome(word) {
    word = word.toLowerCase();
    return word === word.split("").reverse().join("");
}

function main() {
    const word = prompt("Enter the word");
    alert(`The word is polindrome: ${isPolindrome(word)}`);
}

main();
