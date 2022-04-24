const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
console.log(input[0])
for(let i = 1 ; i <= input[0]; i++){
  let num = input[i].split(' ').map((a)=>+a)
  console.log(`Case #${num[0]}:${num[0]}+${num[1]}=${num[0]+num[1]}`)
}
