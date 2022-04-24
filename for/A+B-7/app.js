const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
console.log(input[0])
for(let i = 1 ; i <= input[0]; i++){
  let num = input[i].split(' ')
  console.log(`Case #${num[0]}:${Number(num[0])+Number(num[1])}`)
}
