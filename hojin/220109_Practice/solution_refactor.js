// programmers
// 숫자 문자열과 영단어 https://programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  let result = "";
  const charLength = [4, 3, 3, 5, 4, 4, 3, 5, 5, 4];
  let i = 0, num = 0;
  while (i < s.length) {
    if (s[i] === "z") num = 0;
    else if (s[i] === "o") num = 1;
    else if (s[i] === "t" && s[i + 1] === "w") num = 2;
    else if (s[i] === "t" && s[i + 1] === "h") num = 3;
    else if (s[i] === "f" && s[i + 1] === "o") num = 4;
    else if (s[i] === "f" && s[i + 1] === "i") num = 5;
    else if (s[i] === "s" && s[i + 1] === "i") num = 6;
    else if (s[i] === "s" && s[i + 1] === "e") num = 7;
    else if (s[i] === "e") num = 8;
    else if (s[i] === "n") num = 9;
    else {
      result += s[i];
      i += 1;
      continue;
    }
    result += num;
    i += charLength[num];
    num = 0;
  }
  return +result;
}
