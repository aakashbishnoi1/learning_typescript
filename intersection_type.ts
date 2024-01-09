type Person = {
    name: string,
    age: number,
}

type Employee = {
    id: number,
    title: string,
}

// Since an Employee can also have the properties of a person we do not need to give it that we can simply intersect these two with an & sign

type PersonAndEmployee = Person & Employee;

const Subhash: PersonAndEmployee = {
    name: "Subhash",
    age: 20,
    id: 69,
    title: "Manager",
}

console.log(Subhash);
