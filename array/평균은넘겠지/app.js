const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
/* 첫째 줄에는 테스트 케이스의 개수 C가 주어진다.
둘째 줄부터 각 테스트 케이스마다 학생의 수 
N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 
이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 
같고, 100보다 작거나 같은 정수이다. */
let test = Number(input[0])
for(let i=1; i<=test; i++){
    let score = input[i].split(' ');
    let num2 = score.shift()*1;
    let avg = score.reduce((a,b)=>a += b *1,0);
    let count = 0;
    avg /= num2;

    for (let j = 0; j < num2; j++) {
        if (score[j] > avg) {
            count++;
        }
    };
    
    let result = ((count / num2) * 100).toFixed(3);
    
    console.log(result + "%");
};