let obj: {name: string, age: number} = {
    name: "Aakash",
    age: 20,
}

console.log(obj.name);
console.log(obj.age);

function returnObject(): {name: string, age: number, location: string} {
    return {
        name: "Aakash",
        age: 20,
        location: "India",
    }
}

console.log(returnObject());
