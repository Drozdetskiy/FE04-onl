const ADULT_AGE = 18;

function validateUserAge(users) {
    const kids = [];
    const adults = [];
    users.forEach((user) =>
        user.age < ADULT_AGE ? kids.push(user) : adults.push(user)
    );
    return [kids, adults];
}

function main() {
    const users = [
        { name: "Ivan", age: 18 },
        { name: "Petr", age: 12 },
        { name: "Sidor", age: 25 },
    ];
    const testKids = [{ name: "Petr", age: 12 }];
    const testAdults = [
        { name: "Ivan", age: 18 },
        { name: "Sidor", age: 25 },
    ];
    const [kids, adults] = validateUserAge(users);
    console.log(kids, testKids);
    console.log(adults, testAdults);
}

main();
