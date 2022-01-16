// Two Pointers
function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let tempAvg;
  while (left < right) {
    tempAvg = (arr[left] + arr[right]) / 2;
    if (tempAvg === avg) return true;
    else if (tempAvg > avg) --right;
    else ++left;
  }
  return false;
}
