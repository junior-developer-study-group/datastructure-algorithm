//https://programmers.co.kr/learn/courses/30/lessons/49189
function solution(n, edge) {
  const list = new Array(n + 1);
  for (let i = 1; i <= n; i++) {
    list[i] = [];
  }
  for (const el of edge) {
    list[el[0]].push(el[1]);
    list[el[1]].push(el[0]);
  }
  return bfs(n, list);
}

function bfs(n, list) {
  const q = [];
  const visited = new Array(n + 1).fill(0);
  let answer = 0;
  let max = -Infinity;
  visited[1] = 1;
  q.push([1, 0]);
  while (q.length > 0) {
    const cur = q.shift();
    const curNo = cur[0];
    const curCnt = cur[1];
    if (curCnt > max) {
      answer = 1;
      max = curCnt;
    } else if (curCnt === max) {
      answer++;
    }
    list[curNo].forEach((el) => {
      if (!visited[el]) {
        visited[el] = 1;
        q.push([el, curCnt + 1]);
      }
    });
  }
  return answer;
}
