const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
let num = input.shift();

for(let i=0; i<num; i++){
    let test = '';
    const [testNum,str] = input[i].split(" ");
    for(let j=0; j<str.length; j++){
        test += str[j].repeat(testNum)
    }
    console.log(test)
}


/* let sum = '';
for(let i = 0; i<num; i++){
    let testNum = Number(input[i].split(" ")[0]);
    let cases = input[i].split(' ')[1];
    for(let j=0; j<cases.length; j++){
        for(let k = 0; k<testNum; k++){
            sum += cases[j]
        }
    }
    sum += '\n';
}
console.log(sum) */