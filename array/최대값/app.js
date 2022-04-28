const fs = require('fs');
const num = fs.readFileSync('./input.txt').toString().split('\n').map(Number);
//map메소드를 이용하여 Number로 type 변경
//max:num[0]번째 3
let max = num[0];
//돌아간 회수를 선언한 변수
let count = 0; 
// 총 9까지 반복
for(let i=1; i<9; i++){
    //조건 num[i]가 max값보다 클때
    if(num[i]>max){
        max = num[i];
        count = i;
    }
}
console.log(max);
//0번째 부터 시작하기에 +1
console.log(count+1);