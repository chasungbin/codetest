const fs = require('fs');
const stdin = fs.readFileSync('./input.txt').toString().split('\n');
let a = Number( stdin[0])
let b = Number( stdin[1])
let c = Number( stdin[2])
b+=c
if( b > 59){
    a += 1
    b -= 60
    a%=24
    console.log(a,b)
}