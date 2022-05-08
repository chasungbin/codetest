const fs = require('fs');
const internal = require('stream');
const input = fs.readFileSync('./input.txt').toString().trim() ;
//다이얼 변수
let num = {
	2: "ABC",
	3: "DEF",
	4: "GHI",
	5: "JKL",
	6: "MNO",
	7: "PQRS",
	8: "TUV",
	9: "WXYZ",
};
//걸리는 시간 변수
 let time = 0;
 // 값에 대한 for문
 for (let i = 0; i<input.length; i++){
     //다이얼for문
     for(let j = 2; j<=9; j++){
         //조건문 num[j]번째와 input[i] 같을 때
         //includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다
         if(num[j].includes(input[i])){
             // 시간 추가
             time += j + 1
             break
         }
     }
 }
 console.log(time)