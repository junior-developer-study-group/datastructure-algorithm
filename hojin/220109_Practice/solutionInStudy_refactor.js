function solution(s) {
  const numMap = new Map([
    ["zero", 0],
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
  ]);
  let result = "";
  let temp = ""; // 선언을 줄여주기 위해 for문 밖에서 선언하고
  for (let char of s) {
    if (!isNaN(+char)) {
      result += char;
      continue;
    }
    temp += char;
    if (numMap.get(temp)) {
      result += numMap.get(temp);
      temp = ""; // 비워주기
    }
  }

  return +result;
}
