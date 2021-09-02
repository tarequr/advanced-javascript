const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
const part = numbers.slice(3,9); //broken element

console.log("Slice elements: " + part);
console.log("Orginal Numbers: " + numbers);

const remove = numbers.splice(3,7); //remove number
//const remove = numbers.splice(3,7, 50,55,60);  //remove and add number
console.log("Splice elements: " + remove);
console.log("Orginal Numbers: " + numbers);

const together = numbers.join(","); //join number
console.log("Together Numbers: " + together);