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

// 이상 입력 받기
let n, m, r;
let edgeList;
let visited;
let answer = "";
let visitOrder;
let order = 1;
// 이상 전역변수 공간

function solution(input) {
  inpHandler(input);
  visitOrder[r] = order++;
  visited[r] = 1;
  dfs(r);
  for (let i = 1; i <= n; i++) {
    answer += `${visitOrder[i]}\n`;
  }
  console.log(answer);
}

function inpHandler(input) {
  [n, m, r] = input[0].split(" ").map((el) => Number(el));
  edgeList = new Array(n + 1).fill(0).map(() => []);
  visitOrder = new Array(n + 1).fill(0);
  visited = new Array(n + 1).fill(0);
  let u, v;
  for (let i = 1; i <= m; i++) {
    [u, v] = input[i].split(" ").map((el) => Number(el));
    edgeList[u].push(v);
    edgeList[v].push(u);
  }
  for (let i = 1; i <= n; i++) {
    edgeList[i].sort((a, b) => a - b);
  }
}

function dfs(cur) {
  for (const next of edgeList[cur]) {
    if (!visited[next]) {
      visitOrder[next] = order++;
      visited[next] = 1;
      dfs(next);
    }
  }
}
