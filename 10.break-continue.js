const number = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < number.length; i++) {
    const element = number[i];

    if (number[i] > 5) {
        break;              //break value
    }
    console.log("Break: " + element);
}

/************ Continue ************/
const number2 = [1,-2,3,-4,5,6,-7,-8,9,-10];

for (let i = 0; i < number2.length; i++) {
    const element2 = number2[i];
    
    if (number2[i] < 0) {
        continue;  //Skip the negative value.
    }
    console.log("Continue: " + element2);
}