function add(){
    console.log("Numbers Of Arguments: " + [...arguments]);
    const value =  [...arguments];

    for (let i = 0; i < value.length; i++) {
        const element = value[i];
        total = element + element;
    }
    return total;
    //return num1 + num2 + arguments[2];
}
const result = add(12, 13, 10, 15, 40);
console.log(result);