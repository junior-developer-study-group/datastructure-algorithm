function capitalizeWords(arr) {
  if (arr.length === 0) return [];
  let result = [];
  result.push(arr[0].toUpperCase());
  return result.concat(capitalizeWords(arr.slice(1)));
}

console.log(capitalizeWords(["a", "b,", "d"]));
