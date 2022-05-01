const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');


function d(n){
    let num = n;
    let result = 0;
    for(let i = 0 ; i < String(n).length; i++){
        result = num%10;
        num = Math.floor(num/10);
        console.log(n+result)
    }
    return n + result;
};


const range = 10000;
// 0~10000 범위까지 셀프넘버 배열을 생성하고 true로 초기화.
let selfNumbers = Array(range + 1).fill(true);
console.log(selfNumbers)

for (let i = 0; i <= range; i++) {
    // 셀프넘버가 아니면 false로 변환.
    selfNumbers[d(i)] = false;
}

// true index만 출력
for (let i = 0; i < range; i++) {
    if (selfNumbers[i]) {
        console.log(i);
    }
}