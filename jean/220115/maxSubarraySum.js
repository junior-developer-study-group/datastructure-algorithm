const maxSubarraySum = (arr, num) => {    
    let maxSum = null;
    let tempSum = null;

    if (arr.length < num) return maxSum;
  
    for (let i = 0; i < num; i++) maxSum += arr[i];
    tempSum = maxSum;
 
    for (let i = 0; i < arr.length - num; i++) {
        tempSum = tempSum - arr[i] + arr[i + num];
    
        if (maxSum < tempSum) maxSum = tempSum;
    }  

    return maxSum;
  };
  
  maxSubarraySum([1, 2, 5, 2, 8, 1, 5, 6], 3)