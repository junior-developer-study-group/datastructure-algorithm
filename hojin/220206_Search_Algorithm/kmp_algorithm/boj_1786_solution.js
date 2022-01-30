function lpsTable(str) {
  const len = str.length;
  let returnTable = new Array(len).fill(0);
  for (let i = 1, j = 0; i < len; i++) {
    while (j > 0 && str[i] !== str[j]) j = returnTable[j - 1];
    if (str[i] === str[j]) returnTable[i] = ++j;
  }
  return returnTable;
}

function kmp(long, short) {
  let table = lpsTable(short),
    lenLong = long.length,
    lenShort = short.length;
  let j = 0,
    count = 0,
    result = [];
  for (let i = 0; i < lenLong; i++) {
    while (j > 0 && long[i] != short[j]) {
      j = table[j - 1];
    }
    if (long[i] === short[j]) {
      if (j === lenShort - 1) {
        result.push(i - lenShort + 2);
        count++;
        j = table[j];
      } else {
        j++;
      }
    }
  }
  console.log(count);
  console.log(result.join(" "));
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []; // input 배열 선언

rl.on("line", function (line) {
  input.push(line); // 입력받는 각 줄의 값을 input 배열에 저장
}).on("close", function () {
  kmp(input[0], input[1]);
  process.exit();
});
