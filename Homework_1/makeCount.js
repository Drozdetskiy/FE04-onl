function makeCount(values) {
    return values.reduce((acc, value) => {
        acc[value] ? (acc[value] += 1) : (acc[value] = 1);
        return acc;
    }, {});
}

function main() {
    const values = ["a", "b", "c", "a", "v", "v", "v"];
    const result = makeCount(values);
    const testResult = { a: 2, b: 1, c: 1, v: 3 };
    console.log(result, testResult);
}

main();
