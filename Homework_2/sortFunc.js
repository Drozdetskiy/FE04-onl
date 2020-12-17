function sortFunc(raw_arr) {
    return raw_arr
        .filter((item, i, arr) => arr.indexOf(item) === i)
        .sort((a, b) => a - b);
}

function main() {
    const arr = [10, 2, 33, 1, 33, 4, 9, 22, 10];
    const test_arr = [1, 2, 4, 9, 10, 22, 33];
    const res = sortFunc(arr);
    console.log(res, test_arr);
}

main();
