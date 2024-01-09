let myName: string = "Aakash";
console.log(myName);

function greet(name: string) {
    console.log("hello", name);
}

greet(myName);

let arr: number[] = [5,4,3,5,6];
arr.map((num:number) => {
    console.log(num);
});

let num = 12;

function double(num: number = 2): number  {
    return num * 2
}

function noReturn(num: number): void {
    console.log(`the number is ${num}`);
}

noReturn(num);

console.log(double(num));


let arr1: (number | string)[] = [2,4,6,8,"Anna"];

console.log(arr1);

