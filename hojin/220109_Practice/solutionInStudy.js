function solution(s) {
  const list_num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let result = "";
  let temp = "";
  for (let char of s) {
    if (!isNaN(+char)) {
      result += char;
      continue;
    }
    temp += char;
    if (list_num.indexOf(temp) > -1) {
      result += list_num.indexOf(temp);
      temp = "";
    }
  }
  return +result;
}
