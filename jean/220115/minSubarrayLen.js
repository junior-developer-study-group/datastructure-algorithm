// FIXME: 어려움 ㅠ 
// num을 만족하는 가장 짧은 인자 개수를 구하면 된다

// 갓까오 행님 풀이방식
function minSubArrayLen(arr, target) {
    let sum = arr.reduce((acc, cur) => acc + cur, 0);
    
    if (sum < target) {
        return 0;
    }
    
    let left = 0;
    let right = arr.length - 1;
    let result = arr.length;
    
    while (left < right) {
        const leftNum = arr[left];
        const rightNum = arr[right];
        
        if (leftNum <= rightNum) {
            sum -= leftNum;
            left++;
        } else {
            sum -= rightNum;
            right--;
        }
        
        if (sum < target) {
            return result;
        }
        
        result--;
    }
    
    return result;
}