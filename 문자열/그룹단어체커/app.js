const fs = require('fs');
const internal = require('stream');
const input = fs.readFileSync('./input.txt').toString().split('\n');
//값의 총개수
let num = input.shift()
// 값
let sum = 0;
//총개수 for문
for(let i = 0; i<num; i++){
    // 단어 변수
    const word = input[i]
    // 단어에대한 array
    const letter = [] ;
    //중복 값 변수
    let is = true
    // 단어에 길이
    for(let j = 0; j<word.length; j++){
        //indexof를 이용한 배열 반환 (true = 위치값, false = -1)
        if(letter.indexOf(word[j])){
            letter.push(word[j])
        }else{
            if(letter.indexOf(word[j]) !== letter.length - 1){
                is = false
                break
            };
        };
    };
    //true 일때 만 +1
    if(is){
        sum += 1;
    }
}
console.log(sum)