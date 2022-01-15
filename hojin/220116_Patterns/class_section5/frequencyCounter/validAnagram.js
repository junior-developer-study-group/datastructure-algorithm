function frequencyCounter(str) {
  let counterObject = {};
  for (let val of str) {
    counterObject[val] = (counterObject[val] || 0) + 1;
  }
  return counterObject;
}

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter1 = frequencyCounter(str1);
  let frequencyCounter2 = frequencyCounter(str2);
  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

//////////////////////////////////////////

function validAnagramSolution(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
