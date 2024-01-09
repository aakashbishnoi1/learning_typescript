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

// optional properties
type Student = {
    // Read only properties
    readonly name: string,
    class: number,
    age: number,
    father_name? : string 
}

const my_student: Student = {
    name: "Kapil",
    class: 10,
    age: 16,
}

// You can not change the value of the readonly property once it's constructed
// Error 
// my_student.name = "Aakash";

console.log(`name: ${my_student.name}, age: ${my_student.age}, class: ${my_student.class}`);


