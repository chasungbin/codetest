const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
let addN = 0
let count = 0;
let N = +input;
let isNotSame = true; 

//Math.floor() : 소수점 이하를 버림한다.
//Math.ceil() : 소수점 이하를 올림한다.
//Math.round() : 소수점 이하를 반올림한다.
while(isNotSame) {
    addN = Math.floor(N/10) + N%10; 
    console.log('시험',addN%10)
    N = N%10*10 + addN%10;
    count++
    if(N==input){
        console.log(count);
        isNotSame = false;
    }
}