function lpsTableWhile(str) {
  const len = str.length;
  let returnTable = new Array(len).fill(0);
  let i = 1,
    j = 0;
  while (i < len) {
    while (j > 0 && str[i] !== str[j]) j = returnTable[j - 1];
    if (str[i] === str[j]) returnTable[i] = ++j;
    i++;
  }
  return returnTable;
}
console.log(lpsTableWhile("abcaabcd"));

//-------------------------------------

function lpsTableFor(str) {
  const len = str.length;
  let returnTable = new Array(len).fill(0);
  for (let i = 1, j = 0; i < len; i++) {
    while (j > 0 && str[i] !== str[j]) j = returnTable[j - 1];
    if (str[i] === str[j]) returnTable[i] = ++j;
  }
  return returnTable;
}

console.log(lpsTableFor("abcaabcd"));
