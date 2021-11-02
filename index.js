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
// array = [5, 1, 22, 25, 6, -1, 8, 10];
// sequence = [1, 6, -1, 10];

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

// ↓↓↓↓↓ You'll need to uncomment this to run Tournament Winner. ↓↓↓↓↓
// competitions = [
// ["HTML", "C#"],
// ["C#", "Python"],
// ["Python", "HTML"],
// ];
//
// results = [1, 0, 0]
//
// const HOME_TEAM_WON = 1;
//
// function tournamentWinner(competitions, results) {
//   let currentBestTeam = '';
//   const scores = {[currentBestTeam]: 0};
//
//   for (let idx = 0; idx < competitions.length; idx++) {
//     const result = results[idx];
//     const [homeTeam, awayTeam] = competitions[idx];
//
//     const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
//
//     updateScores(winningTeam, 3, scores);
//
//     if (scores[winningTeam] > scores[currentBestTeam]) {
//       currentBestTeam = winningTeam;
//     }
//   }
//
//   return currentBestTeam;
// }
//
// function updateScores(team, points, scores) {
//   if (!(team in scores)) scores[team] = 0;
//
//   scores[team] += points;
// }
// console.log(tournamentWinner(competitions, results))


// ===== Non-Constructible Change =====

// ↓↓↓↓↓ You'll need to uncomment this to run Non-Constructible Change. ↓↓↓↓↓
// coins = [5, 7, 1, 1, 2, 3, 22];
//
// let currentChangeCreated = 0;
// function nonConstructibleChange(coins) {
//   coins.sort((a, b) => a - b);
//
//   for (const coin of coins) {
//     if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
//
//     currentChangeCreated += coin;
//   }
//
//   return currentChangeCreated + 1;
// }
// console.log(nonConstructibleChange(coins));


// ===== BST Construction =====

//↓↓↓↓↓ You'll need to uncomment this to run Non-Constructible Change. ↓↓↓↓↓

// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
//
//   // Average: O(log(n)) time | O(log(n)) space
//   // Worst: O(n) time | O(n) space
//   insert(value) {
//     if (value < this.value) {
// 			if (this.left === null) {
// 				this.left = new BST(value);
// 			} else {
// 				this.left.insert(value);
// 			}
// 		} else {
// 			if (this.right === null) {
// 				this.right = new BST(value);
// 			} else {
// 				this.right.insert(value);
// 			}
// 		}
//     // Do not edit the return statement of this method.
//     return this;
//   }
//
//   // Average: O(log(n)) time | O(log(n)) space
//   // Worst: O(n) time | O(n) space
//   contains(value) {
//     if (value < this.value) {
// 			if (this.left === null) {
// 				return false;
// 			} else {
// 				return this.left.contains(value);
// 			}
// 		} else if (value > this.value) {
// 			if (this.right === null) {
// 				return false;
// 			} else {
// 				return this.right.contains(value);
// 			}
// 		} else {
// 			return true;
// 		}
//   }
//
//   // Average: O(log(n)) time | O(log(n)) space
//   // Worst: O(n) time | O(n) space
//   remove(value, parent = null) {
//     if (value < this.value) {
// 			if (this.left !== null) {
// 				this.left.remove(value, this);
// 			}
// 		} else if (value > this.value) {
// 			if (this.right !== null) {
// 				this.right.remove(value, this);
// 			}
// 		} else {
// 			if (this.left !== null && this.right !== null) {
// 				this.value = this.right.getMinValue();
// 				this.right.remove(this.value, this);
// 			} else if (parent === null) {
// 				if (this.left !== null) {
// 					this.value = this.left.value;
// 					this.right = this.left.right;
// 					this.left = this.left.left;
// 				} else if (this.right !== null) {
// 					this.value = this.right.value;
// 					this.left = this.right.left;
// 					this.right = this.right.right;
// 				} else {
// 					// This is a single-node tree. Do nothing.
// 				}
// 			} else if (parent.left === this) {
// 				parent.left = this.left !== null ? this.left : this.right;
// 			} else if (parent.right === this) {
// 				parent.right = this.left !== null ? this.left : this.right;
// 			}
// 		}
//     // Do not edit the return statement of this method.
//     return this;
//   }
//
//   getMinValue() {
//     if (this.left === null) {
//       return this.value;
//     } else {
//       return this.left.getMinValue();
//     }
//   }
// }


// ===== Find Closest Value in BST =====

// Solved recursively.
// Average: 0(Log(n)) time | 0(Log(n)) space
// Worst: 0(n) time | 0(n) space

// function findClosestValueInBst(tree, target) {
//   return findClosestValueInBstHelper(tree, target, tree.value);
// }
//
// function findClosestValueInBstHelper(tree, target, closest) {
//   if (tree == null) return closest;
//   if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
//     closest = tree.value;
//   }
//   if (target < tree.value) {
//     return findClosestValueInBstHelper(tree.left, target, closest);
//   } else if (target > tree.value) {
//     return findClosestValueInBstHelper(tree.right, target, closest);
//   } else {
//     return closest;
//   }
// }
// console.log(findClosestValueInBst(tree, 12));


// Solved iteratively.
// Average: 0(Log(n)) time | 0(1) space
// Worst: 0(n) time | 0(1) space
// function findClosestValueInBst(tree, target) {
//   return findClosestValueInBstHelper(tree, target, tree.value);
// }
//
// function findClosestValueInBstHelper(tree, target, closest) {
// 	let currentNode = tree;
// 	while (currentNode !== null) {
// 		if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
// 			closest = currentNode.value;
// 		}
// 		if (target < currentNode.value) {
// 			currentNode = currentNode.left;
// 		} else if (target > currentNode.value) {
// 			currentNode = currentNode.right;
// 		} else {
// 			break;
// 		}
// 	}
// 	return closest;
// }

// == Binary Search Tree ==
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
      }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (node.left = null && node.right = null) {
          return null;
        }
        // node has no left child
        if (node.left = null) {
          return node.right;
        }
        // node has no right child
        if (node.rigth = null) {
          return node.left;
        }
        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = remobeNOdenode(node.left, tempNode.data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }
}


























// To log output: cd into the file. In the terminal enter >node index
