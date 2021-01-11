function getFlat(arr) {
    return arr.reduce(
        (acc, item) =>
            Array.isArray(item) ? [...acc, ...getFlat(item)] : [...acc, item],
        []
    );
}

function main() {
    const arr0 = [1, 2, 3, [1, 2, 3], [1, 2, 3, [4, 5, 6]]];
    const res0 = getFlat(arr0);
    const arr1 = [1, 2, 3, [4, "str", 6, [7, "str", 9]]];
    const res1 = getFlat(arr1);
    console.log(res0);
    console.log(res1);
}

main();
