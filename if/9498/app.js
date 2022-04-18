const fs = require('fs');
const stdin = fs.readFileSync('./input.txt').toString().split('\n');
let a = Number( stdin[0])
if(a >= 90 && a <= 100){
    console.log("A")
} else if(a >= 80 && a<=89){
    console.log("B")
} else if(a >= 70 && a<=79){
    console.log("C")
}else if(a >= 60 && a <=69){
    console.log("D")
}else{
 console.log("F")   
}