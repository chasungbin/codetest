const fs = require('fs');
const stdin = fs.readFileSync('./input.txt').toString().split('\n');
let a = Number( stdin[0])
let b = Number( stdin[1])
if(a>b){
    console.log(">")
} else if(a<b){
    console.log("<")
} else if(a === b){
    console.log("==")
}