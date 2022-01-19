function minSubArrayLenSol(nums, sum) {
  let total = 0;
  // 들어온 sum과 비교할 window 내 값들의 합을 담아줄 total
  let start = 0;
  // window의 시작 index
  let end = 0;
  // window의 끝 index
  let minLen = Infinity;
  // return 해 줄 가장 짧은 window 길이. 어떤 길이여도 가장 처음 길이가 min이 되도록 Infinity로 입력

  while (start < nums.length) {
    // window가 nums array를 벗어날 때까지
    if (total < sum && end < nums.length) {
      // window 내 값들 합이 들어온 sum보다 작고 window의 end가 array 안에 있을 때
      total += nums[end];
      // total은 더해주고
      end++;
      // window의 크기를 키운다(end가 커지면 window가 커진다)
      console.log(
        `window increase: ${nums.slice(start, end)}\nlength: ${
          nums.slice(start, end).length
        }`
      );
    } else if (total >= sum) {
      // window 내 합이 입력된 sum보다 크면 조건에 부합
      console.log(`over ${sum}: ${nums.slice(start, end)}`);
      minLen = Math.min(minLen, end - start);
      // minLen과 현재 window의 길이 중 더 짧은 값 넣어주기
      total -= nums[start];
      // window내 합들이 sum을 벗어나므로 현재 window start 값을 빼주고
      start++;
      // window 크기를 줄인다.
      console.log(
        `window decrease: ${nums.slice(start, end)}\nlength: ${
          nums.slice(start, end).length
        }`
      );
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(
  minSubArrayLenSol([1, 2, 5, 3, 7, 89, 3, 1, 5, 65, 1, 56, 1, 5, 6, 23], 100)
);
