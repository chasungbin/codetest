const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
 
function makeInput(){
    let line = 0;
 
    return function(){
        return stdin[line++];
    };
};
 
const input = makeInput();
