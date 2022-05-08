const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString()/* .split('\n') */;
// 값을 넣어줄 변수 선언
let string = [];
// 아스키코드 기반으로 for 문
for(let i = 97; i<=122; i++){
    //indexof를 이용하여 해당 아스키코드 번호 해당하는 것이 있는 지 확인
    string.push(input.indexOf(String.fromCharCode(i)))
}
//jion 공백값을 주고 묶음
console.log(string.join(' '))

//String.fromCharCode(아스키코드 번호)
/* console.log(String.fromCharCode(112)); //p
console.log(String.fromCharCode(65, 83, 67, 73, 73)); //ASCII */