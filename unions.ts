// union type means that we can have one of the given types
let password: string | number = 20;
let age: string | number = "sixteen";

type UserInfo = {
    name: string,
    age: number,
}

type AccountInfo = {
    email: string,
    password: string,
}


let user: UserInfo | AccountInfo = {
    email: "myemail.gmail.com",
    password: "myPassword"
}

let user2: UserInfo | AccountInfo = {
    name: "Sanjay",
    age: 16,
}

let user3: UserInfo | AccountInfo = {
    name: "Kapil",
    age: 16,
    email: "myemail.gmail.com",
    password: "myPassword"
}

// union arrays 

let arr: (number | string )[] = [1,2,3, "Name"];
