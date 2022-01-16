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
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}