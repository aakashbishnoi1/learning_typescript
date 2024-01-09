type Person = {
    name: string,
    age: number,
    country: string,
};

const myPerson: Person = {
    name: "Kapil",
    age: 16,
    country: "India",
};

console.log(myPerson);

function printPerson(person: Person) {
    console.log(`${person.name}, ${person.age}, ${person.country}`);
}
printPerson(myPerson);

function returnPerson(): Person {
    const person: Person = {
        name: "Kapil",
        age: 16,
        country: "India",
    }
    return person;
}
returnPerson();