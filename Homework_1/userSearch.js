const USERS = [
    { firstName: "Ashton", lastName: "Kutcher", age: 40 },
    { firstName: "Dima", lastName: "Kutcher", age: 37 },
    { firstName: "Harry", lastName: "Potter", age: 67 },
    { firstName: "Ayen", lastName: "Rent", age: 18 },
    { firstName: "Johnny", lastName: "Silverhand", age: 50 },
];

function findUser(lastName, users) {
    return users.find((user) => user.lastName === lastName);
}

function getUserInfo(user) {
    return JSON.stringify(user, null, 4);
}

function main() {
    const lastName = prompt("Enter the last name");
    const user = findUser(lastName, USERS);
    const message = user
        ? getUserInfo(user)
        : "No results found for your request";
    alert(message);
}

main();
