const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
console.log(input);
let star = '';
for(let i = 1 ; i <= input; i++){
   star += '*'
   console.log(star)
}
