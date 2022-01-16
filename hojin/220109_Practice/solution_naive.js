// programmers
// 숫자 문자열과 영단어 https://programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  let arr_pushed = [];
  let i = 0;
  while (i < s.length) {
    if ("0" <= s[i] && s[i] <= "9") {
      arr_pushed.push(s[i]);
      i += 1;
    } else {
      if (s[i] === "z") {
        arr_pushed.push("0");
        i += 4;
      } else if (s[i] === "o") {
        arr_pushed.push("1");
        i += 3;
      } else if (s[i] === "t") {
        if (s[i + 1] === "w") {
          arr_pushed.push("2");
          i += 3;
        } else {
          arr_pushed.push("3");
          i += 5;
        }
      } else if (s[i] === "f") {
        if (s[i + 1] === "o") {
          arr_pushed.push("4");
          i += 4;
        } else {
          arr_pushed.push("5");
          i += 4;
        }
      } else if (s[i] == "s") {
        if (s[i + 1] === "i") {
          arr_pushed.push("6");
          i += 3;
        } else {
          arr_pushed.push("7");
          i += 5;
        }
      } else if (s[i] === "e") {
        arr_pushed.push("8");
        i += 5;
      } else if (s[i] === "n") {
        arr_pushed.push("9");
        i += 4;
      }
    }
  }
  const result_str = arr_pushed.join("");
  const result = parseInt(result_str, 10);
  return result;
}
