function sumNumbers(numbers) {
    return numbers.reduce((acc, value) => acc + value);
}

function main() {
    const numbers = [10, 25, 100];
    const result = sumNumbers(numbers);
    const testResult = 135;
    console.assert(
        testResult === result,
        `sumNumbers failed: ${testResult} !== ${result}`
    );
}

main();
