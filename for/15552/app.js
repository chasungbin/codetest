const fs = require('fs');
const stdin = fs.readFileSync('./input.txt').toString().split('\n');
for (let i = 1; i <= stdin[0]; i++) {
    let numbers = stdin[i].split(' ');  
    console.log(Number(numbers[0]) + Number(numbers[1]))
};