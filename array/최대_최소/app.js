const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
let num  = input[1]
console.log(Number(num).sort((a,b)=>{
    a - b
}))