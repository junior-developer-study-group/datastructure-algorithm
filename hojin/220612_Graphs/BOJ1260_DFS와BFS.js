const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

let answer = "";
let visited;
let n, m, v;

function solution(input) {
  [n, m, v] = input[0].split(" ").map((el) => Number(el));
  const list = new Array(n + 1);
  for (let i = 1; i <= n; i++) {
    list[i] = [];
  }
  for (let i = 1; i <= m; i++) {
    const [from, to] = input[i].split(" ").map((el) => Number(el));
    list[from].push(to);
    list[to].push(from);
  }
  for (let i = 1; i <= n; i++) {
    list[i].sort((a, b) => a - b);
  }
  visited = new Array(n + 1).fill(0);
  visited[v] = 1;
  answer += `${v} `;
  dfs(v, list, 1);
  answer += `
`;
  bfs(v, list);
  console.log(answer);
}

function bfs(v, list) {
  const q = [];
  visited = new Array(n + 1).fill(0);
  visited[v] = 1;
  q.push(v);
  while (q.length > 0) {
    const cur = q.shift();
    answer += `${cur} `;
    for (const next of list[cur]) {
      if (!visited[next]) {
        visited[next] = 1;
        q.push(next);
      }
    }
  }
}
function dfs(no, list, depth) {
  if (depth === n) {
    return;
  }
  for (const el of list[no]) {
    if (!visited[el]) {
      visited[el] = 1;
      answer += `${el} `;
      dfs(el, list, depth + 1);
    }
  }
}
