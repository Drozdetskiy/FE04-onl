function isPolindrome(word) {
    word = word.toLowerCase();
    const symbolList = word.split("");
    makeReversed(symbolList);
    return word === symbolList.join("");
}

function main() {
    const word = prompt("Enter the word");
    alert(`The word is polindrome: ${isPolindrome(word)}`);
}

function makeReversed(arr) {
    let i = 0;
    while (i < arr.length / 2) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
        i++;
    }
}

main();
