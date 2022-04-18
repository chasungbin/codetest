const fs = require('fs');
const stdin = fs.readFileSync('./input.txt').toString().split('\n');
let x = Number( stdin[0])
let y = Number( stdin[1])
if(x > 0 && y >0)
{console.log(1)}
else if( x < 0 && y > 0)
{console.log(2)}
else if( x < 0 && y < 0)
{console.log(3)}
else if(x > 0 && y < 0)
{console.log(4)}