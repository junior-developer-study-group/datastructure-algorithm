// Merges two already sorted arrays
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) result.push(arr1[i++]);
    else result.push(arr2[j++]);
  }
  if (i < arr1.length) result = result.concat(arr1.slice(i - arr1.length));
  else result = result.concat(arr2.slice(j - arr2.length));
  return result;
}
merge([100, 200], [1, 2, 3, 5, 6]);
