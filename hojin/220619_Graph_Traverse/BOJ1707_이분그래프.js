const fs = require("fs");
const inputList = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [testcase, ...list] = inputList;
let TC = Number(testcase);
let index = 0;
let bipartite;
let visited, vertex;
let answer = "";

const dfs = (cur, groupNo) => {
  vertex[cur].forEach((el) => {
    if (visited[el] === groupNo) bipartite = false;
    if (!visited[el]) {
      visited[el] = -groupNo;
      dfs(el, -groupNo);
    }
  });
};

while (TC--) {
  bipartite = true;
  const [V, E] = list[index].split(" ").map(Number);
  visited = Array(V + 1).fill(0);
  vertex = [...Array(V + 1)].map(() => []);
  const targetArr = list.slice(index + 1, index + E + 1);
  targetArr.forEach((str) => {
    const [u, v] = str.split(" ").map(Number);
    vertex[u].push(v);
    vertex[v].push(u);
  });
  for (let i = 1; i <= V; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      dfs(i, 1);
    }
  }
  answer += bipartite ? "YES\n" : "NO\n";
  index += E + 1;
}
console.log(answer);
