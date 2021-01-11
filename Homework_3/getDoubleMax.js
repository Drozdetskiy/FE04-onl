function getDoubleMax(arr) {
    if (arr.length < 2) {
        throw Error("Wrong array");
    }

    let [firstMax, secondMax] = arr.slice(0, 2).sort((a, b) => b - a);

    for (const item of arr.slice(2)) {
        if (item >= firstMax) {
            [firstMax, secondMax] = [item, firstMax];
        } else if (item > secondMax) {
            secondMax = item;
        }
    }

    return [firstMax, secondMax];
}

function main() {
    const arr = [2, 4, 9, 1, 3, 8, 5];
    const testFirstMax = 9;
    const testSecondMax = 8;
    const [firstMax, secondMax] = getDoubleMax(arr);
    console.log(firstMax, testFirstMax);
    console.log(secondMax, testSecondMax);
}

main();
