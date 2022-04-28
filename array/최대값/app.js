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

//다른 사람들이 푼 풀이 
// Math메소드 사용 그중 max
//Math.max()함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환합니다.
/* apply(thisArg, [argsArray])
this 인자를 첫번째 인자로 받고, 두번째 인자로는 배열을 받음 */
let maxs = Math.max.apply(null, num)
//findIndex() 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다.
let order = (num.findIndex(num => num === max)) + 1;

console.log(maxs + '\n' + order);