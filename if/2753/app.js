const fs = require('fs');
const stdin = fs.readFileSync('./input.txt').toString().split('\n');
let a = Number( stdin[0])
if((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0){
    console.log("1")
} 
else{
 console.log("0")   
}