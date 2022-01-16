function areThereDuplicatesFrequencyCounter(...args) {
  args = args.join("");
  let counterObject = {};
  for (let val of args) {
    counterObject[val] = (counterObject[val] || 0) + 1;
    if (counterObject[val] > 1) return true;
  }
  return false;
}
/////////////////////////
function areThereDuplicatesTwoPointers(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
////////////////////////////////////////
function areThereDuplicatesSet() {
  return new Set(arguments).size !== arguments.length;
}
