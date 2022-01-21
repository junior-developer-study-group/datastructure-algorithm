function capitalizeFirst(arr) {
  let result = [];
  if (arr.length === 0) return [];
  const str = arr[0][0].toUpperCase() + arr[0].slice(1);
  result.push(str);
  return (result = result.concat(capitalizeFirst(arr.slice(1))));
}

console.log(["banana", "apple", "abc", "hi"]);
