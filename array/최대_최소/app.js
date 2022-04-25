const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
let count = Number(input[0]);
let num  = input[1].split(' ').map((a)=>+a)
num.sort((a,b)=>
    a-b
)
console.log(num[0],num[num.length-1])
