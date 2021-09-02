/*--------------part 1-------------*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result  = element * element;
    output.push(result);
}
console.log(output);

/*--------------part 2-------------*/
const numbers2 = [2, 3, 4, 5, 6, 7, 8];

function square(element){
    return element * element;
}
 numbers2.map(function(element, index, array){
     console.log(element, index, array);
 })


 /*--------------part 3-------------*/
//  const numbers3 = [2, 3, 4, 5, 6, 7, 8, 9];

//  const result3 = numbers3.map(x => x * x);
// console.log(result3);

 /*
****************** Filter Section *************
 */
 /*--------------part 1-------------*/

const number5 = [3, 4, 5, 6, 7, 8, 9];
const bigger = number5.filter( x => x > 5);

console.log("Filter value is: "+bigger);

/** Filter related function..
 * reduce
 * foreach
 * find
 */