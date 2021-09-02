const names = [
    {id:201, name: "Antu", age: 20},
    {id:202, name: "Tahsin", age: 22},
    {id:203, name: "Mitu", age: 23},
    {id:204, name: "Abir", age: 28},
    {id:205, name: "Rafsan", age: 29},
];

const output = [];
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    const result = element.name;
    output.push(result);
}

console.log("Name is: "+output);

/************* Another Process *************/
const ids = names.map( nam => nam.id);
console.log("Id is: " + ids);

/************* Filter Part *************/
const bigger = names.filter( val => val.age>23);
const bigger2 = names.find( val => val.age>23);

console.log("Filtering ID: " + bigger);
console.log("Finding ID: " + bigger2);