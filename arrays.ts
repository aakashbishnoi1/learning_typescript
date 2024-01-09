let arr: (number | boolean | string)[] = [2,3,4,5];
arr.push("Foo");
arr.push(true);

console.log(arr);


let nested: (number[] | string[])[] = [[1,2,3,],["foo","bar","baz"]];
let nested1: number[][] = [[1,2,3,4,], [4,3,2,1,]];

let [first, second ]  = nested;
console.log(first);




