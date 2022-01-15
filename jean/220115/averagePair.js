function averagePair(arr, num){
    let startIdx = 0;
    let endIdx = arr.length - 1;
    
    while (startIdx < endIdx) {
        const sum = arr[startIdx] + arr[endIdx];
    
        if (sum / 2 === num) return true;
        else if (sum / 2 < num) startIdx++;
        else endIdx--;
    }
    
    return false;
  }
  
  averagePair([1,2,3], 2.5);