function getFlat(arr) {
    return arr.reduce(
        (acc, item) =>
            Array.isArray(item) ? [...acc, ...getFlat(item)] : [...acc, item],
        []
    );
}

function main() {
    const arr = [1, 2, 3, [1, 2, 3], [1, 2, 3, [4, 5, 6]]];
    const res = getFlat(arr);
    console.log(res);
}

main();