const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  const input = line.split(' ');
  const a = Number(input[0]);
  const b = Number(input[1]);
  if (a > b) console.log('>');
  if (a < b) console.log('<');
  if (a === b) console.log('==');
  rl.close();
}).on('close', function () {
  process.exit();
});