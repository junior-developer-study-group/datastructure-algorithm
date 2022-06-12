//https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
function solution(numbers, target) {
  var answer = 0;
  let len = numbers.length;
  function dfs(cnt, val) {
    if (cnt === len) {
      if (val === target) ++answer;
      return;
    }
    dfs(cnt + 1, val + numbers[cnt]);
    dfs(cnt + 1, val - numbers[cnt]);
  }
  dfs(0, 0);
  return answer;
}
