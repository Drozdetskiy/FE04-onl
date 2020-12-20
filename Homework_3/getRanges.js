class Range extends Array {
    toString() {
        let str = "";
        if (this.length > 1) {
            str = `${this[0]}-${this[this.length - 1]}`;
        } else if (this.length === 1) {
            str = `${this[0]}`;
        }
        return str;
    }
}

function addToRange(rangeList, item) {
    const lastElement = rangeList.length
        ? rangeList[rangeList.length - 1]
        : undefined;

    if (lastElement && item === lastElement[lastElement.length - 1] + 1) {
        lastElement.push(item);
    } else {
        rangeList.push(Range.from([item]));
    }
    return rangeList;
}

function getRanges(arr) {
    return arr
        .sort((a, b) => a - b)
        .reduce(addToRange, [])
        .join(", ");
}

function main() {
    const arr = [1, 3, 5, 2, 8, 9, 10, 12];
    const testRes = "1-3, 5, 8-10, 12";
    const res = getRanges(arr);
    console.log(res);
    console.log(testRes);
}

main();
