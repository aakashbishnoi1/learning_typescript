let myTup: [string, number] = ["Aakash", 1];

// valid 
myTup[0] = "Anna";
myTup[1] = 2;

// Invalid if we try to change the values from the defined types
// myTup[0] = 3;
// myTup[1] = "Subhash";

// Destructuring 

let [first, second] = myTup;
console.log(first);
console.log(second);
