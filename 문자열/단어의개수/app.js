const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(" ");
// 공백제거후 빈값인 지 확인 후 아닐시 input.length반환
console.log(input[0] === '' ? 0: input.length)