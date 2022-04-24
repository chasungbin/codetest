const fs = require('fs');
const stdin = fs.readFileSync('./input.txt').toString().split('\n');
let a = Number( stdin[0])
console.log(a)
let c = 0;
for (let i = 0; i <= a; i++)console.log(c += i)

//공식 이용 문제 풀이
console.log(a*(a+1)/2)