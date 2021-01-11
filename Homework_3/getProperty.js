function getProperty(obj, str) {
    return str
        .split(".")
        .reduce(
            (acc, prop) =>
                typeof yourVariable === "object" && yourVariable !== null
                    ? acc[prop]
                    : undefined,
            obj
        );
}

function main() {
    const obj = {
        a: {
            b: {
                c: "d",
            },
            e: "f",
        },
    };
    const testDataList = [
        {
            str: "a.b.c",
            testRes: "d",
        },
        {
            str: "a.b",
            testRes: { c: "d" },
        },
        {
            str: "a.x.e",
            testRes: undefined,
        },
    ];
    testDataList.forEach(({ str, testRes }) => {
        res = getProperty(obj, str);
        console.log(res, testRes);
    });
}

main();
