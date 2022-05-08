const fs = require('fs');
const internal = require('stream');
const input = fs.readFileSync('./input.txt').toString()/* .split('\n') */.toLowerCase();
// 26개의 알파벳 0값으로 지넝
const filter = new Array(26).fill(0);
//for문 값에 대햔
for (let i = 0; i<input.length; i++){
    //아스키코드 번호로 변환(알파벳은 97번터 시작)
    filter[input.charCodeAt(i) - 97]++;
}
// max값 변수
let max = Math.max(...filter)
// indexof로 최대값 위치 
let index = filter.indexOf(max)
// 중복값 확인 변수
let isSame = false
//26개의 알페벳 for문
for(let j = 0; j<26; j++){
    //조건 중복 값이 있는 지확인 하기 위한 조건
    if(filter[j] === max && index != j){
        // true 변화
        isSame =true
        break
    }
}
// 삼항연사자 적용 true 이면 ? 아니면 65더한 A부터 문자열 반환
console.log(isSame ? '?':String.fromCharCode(index + 65))