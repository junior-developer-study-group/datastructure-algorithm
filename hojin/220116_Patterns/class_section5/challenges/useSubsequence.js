// Two Pointers
function isSubsequence(str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < str1.length) {
    if (pointer2 > str2.length) return false;
    if (str1[pointer1] === str2[pointer2]) pointer1++;
    pointer2++;
  }
  return true;
}
