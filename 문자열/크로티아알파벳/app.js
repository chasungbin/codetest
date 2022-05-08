const fs = require('fs');
const internal = require('stream');
const input = fs.readFileSync('./input.txt').toString().split('\n');
let c = input[0]
let phrase = [
   "c=",
    "c-",
    "dz=",
    "d-",
    "lj",
    "nj",
    "s=",
    "z="
];
for(let i of phrase){
    //split자름 jion으로 변환 해서 합침
    c = c.split(i).join('*')
}
console.log(c.length)

// 값
let input1 = input[0];
//함수 실행
solution(input1)
//함수 선언
function solution(str) {
    //알파벳 ex
    let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
    //for of 문
        for (let alphabet of croatia) {
          str = str.split(alphabet).join("Q"); //이 부분이 가장 핵심.
        }
    /* for문 안에서 str이 어떻게 변하는지의 과정.
    ljes=njak
	ljes=njak
	ljes=njak
	ljes=njak
	Qes=njak
	Qes=Qak
	QeQQak
	QeQQak
   */
        //console.log(str.len)
}

//정규식 방법
/* function Solution(input){
    var S = String(input[0]);
    const RegExp = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
    const answer = S.replace(RegExp,' ');

    console.log(answer);
    console.log(answer.length);
}
Solution(input) */