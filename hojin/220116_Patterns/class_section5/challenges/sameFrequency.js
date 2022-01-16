function sameFrequency(num1, num2) {
  num1 += "";
  num2 += "";
  if (num1.length !== num2.length) return false;

  // const lookup = {};

  // for (let i = 0; i < num1.length; i++) {
  //   let letter = num1[i];
  //   lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  // }

    const reducer = (acc,cur) => {
    acc[cur] ? acc[cur]++ : acc[cur] = 1
    return acc
  }
  
  const num1FrequencyCount = num1str.split('').reduce(reducer,{});

  for (let i = 0; i < num2.length; i++) {
    let letter = num2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
