const fs = require('fs');
const stdin = fs.readFileSync('./input.txt').toString().split('\n');
let a = Number( stdin[0])
for(let i = 1; i<10; i++){
    console.log(`${a}*${i}= ${a*i}`)
    }