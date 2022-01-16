// 광훈이형 풀이
function minSubArrayLen(arr, target) {
  let sum = arr.reduce((acc, cur) => acc + cur, 0);

  if (sum < target) {
    return 0;
  }

  let left = 0;
  let right = arr.length - 1;
  let result = arr.length;

  while (left < right) {
    const leftNum = arr[left];
    const rightNum = arr[right];

    if (leftNum <= rightNum) {
      sum -= leftNum;
      left++;
    } else {
      sum -= rightNum;
      right--;
    }

    if (sum < target) {
      return result;
    }

    result--;
    console.log(arr.slice(left, right + 1));
  }

  return result;
}

/////////////////////////////////////////////////////

function minSubArrayLenSol(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    console.log(nums.slice(start, end + 1));
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
