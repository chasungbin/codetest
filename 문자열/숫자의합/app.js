const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
// 공백 없는 값 분리
let num = input[1].split('')
// 합의 너어 줄 변수
let sum = 0;
// 첫번째 인자를 이용하여 for 문
for(let i = 0; i<Number(input[0]); i++){
    //합의 위한 숫자로 변환
    sum += Number(num[i])
};
console.log(sum)