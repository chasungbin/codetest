const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
let origin = Number(input);
let count = 0;
console.log(origin)

while(true){
    let sum =Math.floor(input/10) + (input%10);
    console.log('sum',sum)
    let input = (input%10)*10+(sum%10)
    console.log('input',input)
    count++;
    if(origin === input) break;
}
console.log(count);
  