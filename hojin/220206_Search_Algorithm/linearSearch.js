function linearSearch(arr, num) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      index = i;
      break;
    }
  }
  return index;
}

//////////////////////////
function linearSearchSol(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
////////////// 이게 더 좋다.
