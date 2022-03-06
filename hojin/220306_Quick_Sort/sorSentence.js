/**
 * @param {string} s
 * @return {string}
 */
const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, i, j) => {
    // let tmp = arr[i];
    // arr[i] = arr[j];
    // arr[j] = tmp;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  let pivotVal = arr[start].charAt(arr[start].length - 1);
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivotVal > arr[i].charAt(arr[i].length - 1)) {
      swap(arr, ++swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
};

const sortSentence = function (s) {
  let arr = s.split(" ");

  const qSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
      let pivotIndex = pivot(arr, left, right);

      qSort(arr, left, pivotIndex - 1);
      qSort(arr, pivotIndex + 1, right);
    }
    return arr;
  };

  let answer = qSort(arr).map((x) => x.slice(0, -1)).join(" ");
  return answer;
};

let s = "is2 sentence4 This1 a3";
console.log(sortSentence(s));
