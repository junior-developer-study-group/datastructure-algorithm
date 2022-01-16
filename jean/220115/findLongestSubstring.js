// FIXME: sliding window 방식으로 풀어야함
function findLongestSubstring(str){
    str = str.split('');
  let longestSubstring = 0;
  const charObj = {};
  
  for (let i=0; i<str.length; i++) {
      if (charObj[str[i]]) {
        // return longestSubstring;  
        break;
      } else {
          longestSubstring++;
          charObj[str[i]] = 1;
      }
  }
  
  return longestSubstring;  
}

// findLongestSubstring('rithmschool');
// findLongestSubstring('bbbbbb');
findLongestSubstring('thisisawesome');

// 갓까오 행님 풀이방식
function findLongestSubstring(str){
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
        result = Math.max(result, end - start + 1);
        end++;
    }
    
    return result;
  }