/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  let pivotVal = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivotVal > arr[i]) {
      swap(arr, ++swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
};
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};
const sortColors = (nums) => {
  quickSort(nums);
  return nums;
};

let nums = [2, 0, 1];
console.log(sortColors(nums));
