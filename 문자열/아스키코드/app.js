const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
let string = input[0];
//아스키코드 변화 문자열 자릿수
console.log(string.charCodeAt(0))
/* fromCharCode
: 아스키코드번호를 받아 문자열을 구성해주는 함수
//String.fromCharCode(아스키코드 번호) */