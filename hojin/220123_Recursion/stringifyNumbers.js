function stringifyNumbers(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key].length !== 0) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === "number") {
      newObj[key] = obj[key] + "";
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
