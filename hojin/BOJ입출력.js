//https://lakelouise.tistory.com/140?category=1033473
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []; // input 배열 선언

//Ctrl+c 또는 Ctrl+d로 입력 종료
rl.on("line", function (line) {
  input.push(line); // 입력받는 각 줄의 값을 input 배열에 저장
}).on("close", function () {
  solution(input);
  process.exit();
});
