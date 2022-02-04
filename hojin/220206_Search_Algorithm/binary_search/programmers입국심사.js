function solution(n, times) {
  times.sort((a, b) => a - b);
  let min_time = 1,
    max_time = n * times[times.length - 1],
    mid,
    peopleSumEachCase;
  while (min_time <= max_time) {
    mid = Math.floor((max_time + min_time) / 2);
    peopleSumEachCase = 0;
    for (let time of times) {
      peopleSumEachCase += Math.floor(mid / time);
    }
    if (peopleSumEachCase >= n) {
      max_time = mid - 1;
    } else {
      min_time = mid + 1;
    }
  }

  return max_time + 1;
}
