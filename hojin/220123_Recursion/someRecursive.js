function someRecursive(arr, cb) {
  // array에서 계속 true를 반환하지 못한다면 빈 array가 입력될 것
  if (arr.length === 0) return false;
  // 하나라도 cb true를 반환한다면 someRecursive 역시 true qksghks
  if (cb(arr[0])) return true;
  // cb(arr[0])이 false일 경우 재귀 실행
  return someRecursive(arr.slice(1), cb);
}
