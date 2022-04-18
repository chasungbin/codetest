const fs = require('fs');
const stdin = fs.readFileSync('./input.txt').toString().split('\n');
let a = Number( stdin[0])
let b = Number( stdin[1])
let c = Number( stdin[2])
if( a === b === c){
    console.log(10000+a*1000)
 }else if(a!==b||a!==c||c!==b){
     if(a===b||a===c)console.log(1000+a*100)
     if(b===c)console.log(1000+b*100)
 }else if(a!==b && a!==c && c!==b){
     const sort = [a,b,c].sort()
         console.log(sort.pop()*100)
 }