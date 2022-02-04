function binarySearch(arr, num) {
  let left = 0,
    right = arr.length - 1;
  let mid;
  while (left < right) {
    mid = Math.ceil((right + left) / 2);
    if (arr[mid] === num) return mid;
    else if (arr[mid] > num) right = mid;
    else left = mid;
  }
  return -1;
}

function binarySearch(arr, num) {
  let left = 0,
    right = arr.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    if (arr[mid] === num) return mid;
    else if (arr[mid] > num) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}
