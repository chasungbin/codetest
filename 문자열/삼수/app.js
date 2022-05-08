const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split("").reverse().join("");
//위쪽 변수에서 reverse와 jion으로 문자열을 뒤집고 합친다
//num 합친 변수를 split
let num = input.split(" ")
//첫번째 값
let test1 = Number(num[0])
//  두번째 값 
let test2 = Number(num[1])
// 더큰 수 비교 if문
console.log(test1 > test2 ? test1:test2)