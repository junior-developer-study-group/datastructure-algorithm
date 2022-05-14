//https://programmers.co.kr/learn/courses/30/lessons/43162?language=javascript
function solution(n, computers) {
  let answer = 0;
  let visited = new Array(n).fill(false);
  function dfs(cnt) {
    const curLink = computers[cnt];
    for (let i = 0; i < n; ++i) {
      if (curLink[i] === 1 && !visited[i]) {
        visited[i] = true;
        dfs(i);
      }
    }
  }
  for (let i = 0; i < n; ++i) {
    if (!visited[i]) {
      dfs(i);
      ++answer;
    }
  }
  return answer;
}
