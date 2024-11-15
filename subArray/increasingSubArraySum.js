/** 
 *  Input  : arr[] = {1, 2, 3, 2, 5, 1, 7}
    Output : 8
    Explanation :  Some Strictly increasing subArrays are 
    {1, 2, 3} sum = 6, 
    {2, 5} sum = 7, 
    {1, 7} sum 8 
    Maximum Sum = 8 
 */

function increaseSubArray(arr) {
    let result = arr[0];
    let prev_result = 0;

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > arr[i - 1]) {
            result += arr[i]
        } else {
            // prev_result =  prev_result < result ? result: prev_result;
            prev_result = Math.max(prev_result, result)
            result = arr[i];
            
        }
    }

    // return result > prev_result ? result : prev_result;
    return Math.max(prev_result, result);
}  

console.log(increaseSubArray([4, 5, 8, 4, 2, 10, 15, 5, 10, 7]))
