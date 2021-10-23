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

// ↓↓↓↓↓ You'll need to uncomment this to run Validate Subsequece. ↓↓↓↓↓
array = [5, 1, 22, 25, 6, -1, 8, 10];
sequence = [1, 6, -1, 10];

// O(n) time | O(1) space
// Using a while loop.
// function isValidSubsequence(array, sequence) {
//   let arrIdx = 0;
//   let seqIdx = 0;
//   while (arrIdx < array.length && seqIdx < sequence.length) {
//     if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
//     arrIdx++;
//   }
//   return seqIdx === sequence.length;
// }
// console.log(isValidSubsequence(array, sequence))


// O(n) time | O(1) space
// Using a for loop.
// function isValidSubsequence(array, sequence) {
//   let seqIdx = 0;
//   for (const value of array) {
//     if (seqIdx === sequence.length) break;
//     if (sequence[seqIdx] === value) seqIdx++;
//   }
//   return seqIdx === sequence.length;
// }
// console.log(isValidSubsequence(array, sequence));


// ===== Sorted Squared Array =====

// ↓↓↓↓↓ You'll need to uncomment this to run Sorted Squared Array. ↓↓↓↓↓
// array = [1, 2, 3, 5, 6, 8, 9];

// O(nLogn) time | O(n) space
// Uing brute force.
// function sortedSquaredArray(array) {
//   const sortedSquares = new Array(array.length).fill(0);
//
//   for (let idx = 0; idx < array.length; idx++) {
//     const value = array[idx];
//     sortedSquares[idx] = value * value;
//   }
//
//   sortedSquares.sort((a, b) => a - b);
//   return sortedSquares;
// }
// console.log(sortedSquaredArray(array))

// O(nLogn) time | O(n) space
// Solved in liner time, sorted in ascending order.
// function sortedSquaredArray(array) {
//   const sortedSquares = new Array(array.length).fill(0);
//   let smallerValueIdx = 0;
//   let largerValueIdx = array.length - 1;
//
//   for (let idx = array.length - 1; idx >= 0; idx--) {
//     const smallerValue = array[smallerValueIdx];
//     const largerValue = array[largerValueIdx];
//
//     if (Math.abs(smallerValue) > Math.abs(largerValue)) {
//       sortedSquares[idx] = smallerValue * smallerValue;
//       smallerValueIdx++;
//     } else {
//       sortedSquares[idx] = largerValue * largerValue;
//       largerValueIdx--;
//     }
//   }
//
//   return sortedSquares;
// }
// console.log(sortedSquaredArray(array));


// ===== Tournament Winner =====

// ↓↓↓↓↓ You'll need to uncomment this to run Sorted Squared Array. ↓↓↓↓↓
competitions = [
["HTML", "C#"],
["C#", "Python"],
["Python", "HTML"],
];

results = [1, 0, 0]

const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
  let currentBestTeam = '';
  const scores = {[currentBestTeam]: 0};

  for (let idx = 0; idx < competitions.length; idx++) {
    const result = results[idx];
    const [homeTeam, awayTeam] = competitions[idx];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }

  return currentBestTeam;
}

function updateScores(team, points, scores) {
  if (!(team in scores)) scores[team] = 0;

  scores[team] += points;
}
console.log(tournamentWinner(competitions, results))




// To log output: cd into the file. In the terminal enter >node index
