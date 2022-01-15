// Anagram
const isValidAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    const frequencyObj = {};

    for (let cha of str1) {
        frequencyObj[cha] = (frequencyObj[cha] || 0) + 1;
    }

    for (let cha of str2) {
        if (!frequencyObj[cha]) {
            return false;
        } 

        frequencyObj[cha] -= 1;
    }

    return !Object.values(frequencyObj).some(num => num)
}

// isValidAnagram('aaz', 'zaa');
isValidAnagram('', '');


function sameFrequency(num1, num2) {
    const frequencyObj = {};
    
    for (let i of String(num1).split('')) {
        frequencyObj[i] = (frequencyObj[i] || 0) + 1;
    }
    
    for (let j of String(num2).split('')) {
        if (!frequencyObj[j]) {
            return false;
        } else {
            frequencyObj[j] -= 1;
        }
    }
    
    return Object.values(frequencyObj).some((num) => !num);
   }


   function areThereDuplicates(...params) {
    const paramArr = [...params];
    const paramObj = {};
    
    return paramArr.some(param => {
        if (paramObj[param]) {
            return true;
        } else {
            paramObj[param] = 1;
            return false;
        }
    }) 
  }

  function areThereDuplicates2(...args) {
    args.sort((a,b) => a > b);

    let start = 0;
    let next = 1;
    
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

  function areThereDuplicates3() {
      return new Set(arguments).size() !== arguments.length;
  }
  