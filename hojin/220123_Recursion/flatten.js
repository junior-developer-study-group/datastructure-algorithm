function flatten(arr) {
  let result = [];
  // arr가 빈 arr일 경우 중단
  if (arr.length === 0) return;
  // arr가 비어있지 않을 경우
  // arr[0]이 array면 flatten 호출
  for (let el of arr) {
    if (typeof el === "object") {
      // return한 array를 result array에 합치기
      result = result.concat(flatten(el));
    } else result.push(el);
  }
  // arr[0]이 array가 아니면 반환할 array에 push
  return result;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
