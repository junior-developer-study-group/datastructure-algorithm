// 광훈형 풀이
function findLongestSubstring(str) {
  if (str.length === 0) {
    return 0;
  }

  let start = 0;
  let end = 1;
  let result = 1;

  const charMap = {
    [str[start]]: 0,
  };

  while (end < str.length) {
    const endChar = str[end];

    if (charMap[endChar] >= start) {
      start = charMap[endChar] + 1;
    }

    charMap[endChar] = end;
    console.log(str.slice(start, end + 1));
    result = Math.max(result, end - start + 1);
    end++;
  }

  return result;
}

/////////////////////////////////////////

function findLongestSubstringSol(str) {
  let longest = 0; // 가장 긴 길이값을 저장할 longest
  let seen = {}; // 본 알파벳을 저장할 object
  let start = 0; // substring의 시작

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      // i index에 해당하는 char가 seen에 있으면
      start = Math.max(start, seen[char]); // start 값 갱신 즉, substring 시작을 다시하는 것
    }
    // console.log("start " + start + " i " + i);
    longest = Math.max(longest, i - start + 1); // 매 index마다 즉, 매 substring 길이마다 기존 longest와 비교
    // console.log(longest);
    seen[char] = i + 1; // 해당 char의 다음 index 저장. index 간 차이값으로 longest를 해줄 때는 문제가 되지 않지만 char가 1개일때도 1 - 0으로 1이 저장된다.
    // console.log(seen);
  }
  return longest;
}

console.log(findLongestSubstringSol("thisisawsome"));
console.log(findLongestSubstringSol("thisishowwedoit"));
console.log(findLongestSubstringSol("rithmschool"));
