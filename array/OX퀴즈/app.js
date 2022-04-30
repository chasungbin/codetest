const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
//첫테스문제 갯수
const ox = Number(input[0]);
//테스문제 개수를 for문사용
for(let i= 1; i<=ox; i++){
    //O있을 떼 ++ 변수
    let count = 0;
    //총합
    let sum = 0;
    //특정 문제 식별 for문
    for(let j=0; j<input[i].length; j++){
        //조건 문제 O 있을 때 ++
        if(input[i][j] === 'O'){
            count++
        }else{
            count = 0;
        };
        // 총합 
        sum += count
    }
    console.log(sum)
}