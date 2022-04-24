const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  let numbers = input[i].split(' ').map(v => +v);
  if(0 < numbers[0] && 0 < numbers[1]){
    console.log(numbers[0] + numbers[1]);
  }
}
  