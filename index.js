// ===== To Number Sum =====

// ↓↓↓↓↓ You'll need to uncomment this to run To Number Sum. ↓↓↓↓↓
// array = [3, 5, -4, 8 , 11, 1, -1, 6];
// targetSum = 10;

// O(n^2) time | O(1) space
// Output: [-1, 11]
// function twoNumberSum(array, targetSum) {
//   for (let i = 0; i < array.length - 1; i++) {
//     const firstNum = array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       const secondNum = array[j];
//       if (firstNum + secondNum === targetSum) {
//         return [firstNum, secondNum];
//       }
//     }
//   }
//   return [];
// };
// console.log(twoNumberSum(array, targetSum));

// O(n) time | O(n) space
// function twoNumberSum(array, targetSum) {
//   const nums = {};
//   for (const num of array) {
//     const potentialMatch = targetSum - num;
//     if (potentialMatch in nums) {
//       return [potentialMatch, num];
//     } else {
//       nums[num] = true;
//     }
//   }
//   return [];
// }
// console.log(twoNumberSum(array, targetSum));

// O(nlog(n)) time | O(1) space
// function twoNumberSum(array, targetSum) {
//   array.sort((a, b) => a - b);
//   let left = 0;
//   let right = array.length - 1;
//   while (left < right) {
//     const currentSum = array[left] + array[right];
//     if (currentSum === targetSum) {
//       return [array[left], array[right]];
//     } else if (currentSum < targetSum) {
//       left++;
//     } else if (currentSum > targetSum) {
//       right--;
//     }
//   }
//   return [];
// }
// console.log(twoNumberSum(array, targetSum));


// ===== Validate Subsequence =====

// ↓↓↓↓↓ You'll need to uncomment this to run TValidate Subsequece. ↓↓↓↓↓
array = [5, 1, 22, 25, 6, -1, 8, 10];
sequence = [1, 6, -1, 10];

// O(n) time | O(1) space
// Using a while loop.
function isValidSubsequence(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length;
}
console.log(isValidSubsequence(array, sequence))

// To log output: cd into the file. In the terminal enter >node index
