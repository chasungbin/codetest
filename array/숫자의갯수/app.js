const { count } = require('console');
const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
/* 세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에 
0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 
구하는 프로그램을 작성하시오.

예를 들어 A = 150, B = 266, C = 427 이라면 
A × B × C = 150 × 266 × 427 = 17037300 이 되고, 계산한 
결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다. */
//input값을 다 곱한다
let sum =String(input[0]*input[1]*input[2]);
console.log(sum)
//1-9까지 숫자를 세기위해 for
for(let i = 0; i<9; i++){
    //같은 숫자있을 때 올라감
    let count = 0 ;
    //sum길이 for
    for(let j=0; j<sum.length; j++){
        if(Number(sum[j]) === i){
            count++
        };
        
    };
    console.log('count',count) 
};

//다른 사람이 푼 풀이
for (let i = 0; i <= 9; i++) { 
    //i를 기준 으로 나누어 길이를 구함(''문자열없애고 + 는 number로 바꾸어줌)
    console.log(sum.split(i+'').length -1 );    
 }
/* split 메서드로 문자열을 나눌 시 기준이 되는 문자를 기점으로 모든 문자열이 배열로 나뉘게 됩니다.
"aBaaaaa". split("B")의 결과는 ["a", "aaaaa"]이 나오게 됩니다. 
즉 B의 개수는 하나이지만 나오는 배열의 값은 2개가 됩니다. 이를 -1을 하여 개수를 맞추어줍니다. */