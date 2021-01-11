function addToSchedule(obj, [className, day, date]) {
    const dayObj = obj[day] || {};
    const classList = dayObj[className] || [];
    classList.push(date);
    return { ...obj, [day]: { ...dayObj, [className]: classList } };
}

function getSchedule(objList) {
    return objList.reduce(addToSchedule, {});
}

function main() {
    const objList = [
        ["A", "mon", "10"],
        ["A", "mon", "10"],
        ["B", "wed", "14"],
        ["C", "mon", "13"],
        ["B", "sut", "14"],
        ["D", "mon", "11"],
        ["A", "twu", "9"],
        ["C", "mon", "10"],
        ["C", "fri", "20"],
        ["D", "mon", "32"],
        ["A", "wed", "5"],
    ];
    const res = getSchedule(objList);
    console.log(res);
}

main();
