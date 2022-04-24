const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
console.log(input);
//내가 했던 풀이 값이 나오지 않음
for(let i = 0 ; i < input; i++){
   let  star = ' ';
   for(let j = input -1; j >= 0; j--){
         star += j <= i ? '*':'';
      }
      console.log(star)
}
let num = Number(input);
//fill메소드는 배열에 같은 값으로 채운다
let star = new Array(num).fill(' ');
for (let i = num - 1; i >= 0; i--) {
  star[i] = '*';
  //join메소드는 베열의 모든 요소를 하나로 연결
  console.log(star.join('')); 
}

