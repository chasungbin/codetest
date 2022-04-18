const fs = require('fs');
const stdin = fs.readFileSync('./input.txt').toString().split('\n');
let h = Number( stdin[0])
let r = Number( stdin[1])
if( h > 0 && r - 45 < 0){
    console.log( h-1, r+60)}
else if( h === 0 && r - 45 < 0){
    console.log(h+23,r+60)}