
# ===== To Number Sum =====

# ↓↓↓↓↓ You'll need to uncomment this to run To Number Sum. ↓↓↓↓↓
# array = [3, 5, -4, 8 , 11, 1, -1, 6];
# targetSum = 10;

# O(n^2) time | O(1) space
# def twoNumberSum(array, targetSum):
#     for i in range(len(array) - 1):
#         firstNum = array[i]
#         for j in range(i + 1, len(array)):
#         if firstNmu + secondNum == targetNum:
#             return [firstNum, secondNum]
#     return[]


# O(n) time | O(n) space
# def twoNumberSum(array, targetSum):
#     nums = {}
#     for num in array:
#         potentialMatch = targetSum = num
#         if targetSum - num in nums:
#             return [potentialMatch, num]
#         else:
#             nums[num] = True
#     retrun []


# O(nlog(n)) time | O(1) space
# def twoNumberSum(array, targetSum):
#     array.sort()
#     left = 0
#     right = len(array) - 1
#     while left < right:
#         currentSum = array[left] + array [right]
#         if currentSum == targetSum:
#             return [array[left], array[right]]
#         elif currentSum < targetSum:
#             left += 1
#         elif currentSum > targetSum:
#             right -= 1
#         return []


# ===== Validate Subsequence =====

# ↓↓↓↓↓ You'll need to uncomment this to run Validate Subsequece. ↓↓↓↓↓
# array = [5, 1, 22, 25, 6, -1, 8, 10];
# sequece = [1, 6, -1, 10];

# O(n) time | O(1) space
# Using a while loop.
# def validateSubsequence(array, sequence):
#     arraIdx = 0
#     seqIdx = 0
#     while arrIdx < len(arry) and seqIdx < len(sequence):
#         if array[arrIdx] === sequence[seqIdx]:
#             seqIndx += 1
#         arrIdx +=1
#     return seqIdx == len(sequence)

# O(n) time | O(1) space
# Using a for loop.
# def validateSubsequence(array, sequene):
#     seqIdx = 0
#     for value in array:
#         if seqIdx == len(sequence):
#             break
#         if seqence[seqIdx] == value:
#             seqIdx += 1
#     return seqIdx == len(sequence)


# ===== Sorted Squared Array =====

# ↓↓↓↓↓ You'll need to uncomment this to run Sorted Squared Array. ↓↓↓↓↓
# array = [1, 2, 3, 5, 6, 8, 9];

# O(nLogn) time | O(n) space
# Uing brute force.
# def sortedSquaredArray(array):
#     sortedSquares = [0 for _ in array]
#
#     for idx in range(len(array)):
#         value = array[idx]
#         sortedSquares[idx] = value * value
#
#     sortedSquares.sort()
#     return sortedSquares

# O(nLogn) time | O(n) space
# Solved in liner time, sorted in ascending order.
# def sortedSquaredArray(array):
#     sortedSquares = [0 for _ in array]
#     smallerValueIdx = 0
#     largerValueIdx = len(array) - 1
#
#     for idx in reversed(range(len(array))):
#         smallerValue = array[smallerValueIdx]
#         largerValue = array[largerValueIdx]
#
#         if abs(smallerValue) > abs(largerValue):
#             sortedSquares[idx] = smallerValue * smallerValue
#             smallerValueIdx += 1
#         else:
#             sortedSquares[idx] = largerValue * largerValueIdx
#             largerValueIdx -= 1
#
#     return sortedSquares


# ===== Tournament Winner =====

# ↓↓↓↓↓ You'll need to uncomment this to run Tournament Winner. ↓↓↓↓↓
# competitions = [
# ["HTML", "C#"],
# ["C#", "Python"],
# ["Python", "HTML"],
# ]
#
# results = [0, 0, 1]

# O(n) time | O(k) space
# Solved using a hash table and a helper function.
# HOME_TEAM_WON = 1
#
# def tournamentWinner(competitions, results):
#     currentBestTeam = ""
#     scores = {currentBestTeam: 0}
#
#     for idx, competition in enumerate(competitions):
#         result = results[idx]
#         homeTeam, awayTeam = competition
#
#         winningTeam = homeTeam if result == HOME_TEAM_WON else awayTeam
#
#         updateScores(winningTeam, 3, scores)
#
#         if scores[winningTeam] > scores[currentBestTeam]:
#             currentBestTeam = winningTeam
#
#     return currentBestTeam
#
# def updateScores(team, points, scores):
#     if team not in scores:
#         scores[team] = 0
#
#     scores[team] += points


# ===== Non-Constructible Change =====

# ↓↓↓↓↓ You'll need to uncomment this to run Non-Constructible Change. ↓↓↓↓↓
# coins = [5, 7, 1, 1, 2, 3, 22];

# O(nLogn) time | O(1) space
# def nonConstructibleChange(coins):
#     coins.sort()
#
#     currentChangeCreated = 0
#     for coin in coins:
#         if coin > currentChangeCreated + 1:
#             return currentChangeCreated + 1
#
#         currentChangeCreated += coin
#
#     return currentChangeCreated + 1


# ===== BST Construction =====

# ↓↓↓↓↓ You'll need to uncomment this to run Non-Constructible Change. ↓↓↓↓↓
#
# class BST:
#     def __init__(self, value):
#         self.value = value
#         self.left = None
#         self.right = None
#
#     # Average: 0(Log(n)) time | 0(1) space
#     # Worst: 0(n) time | 0(1) space
#     def insert(self, value):
#         currentNode = self
#         while True:
#             if value < currentNode.value:
#                 if currentNode.left is None:
#                     currentNode.left = BST(value)
#                     break
#                 else:
#                     currentNode = currentNode.left
#             else:
#                 if currentNode.right is None:
#                     currentNode.right = BST(value)
#                     break
#                 else:
#                     currentNode = currentNode.right
#         return self
#
#     # Average: 0(Log(n)) time | 0(1) space
#     # Worst: 0(n) time | 0(1) space
#     def contains(self, value):
#         currentNode = self
#         while currentNode is not None:
#             if value < currentNode.value:
#                 currentNode = currentNode.left
#             elif value > currentNode.value:
#                 currentNode = currentNode.right
#             else:
#                 return True
#         return False
#
#     # Average: 0(Log(n)) time | 0(1) space
#     # Worst: 0(n) time | 0(1) space
#     def remove(self, value, parentNode = None):
#         currentNode = self
#         while currentNode is not None:
#             if value < currentNode.value:
#                 parentNode = currentNode
#                 currentNode = currentNode.left
#             elif value > currentNode.value:
#                 parentNode = currentNode
#                 currentNode = currentNode.right
#             else:
#                 if currentNode.left is not None and currentNode.right is not None:
#                     currentNode.value = currentNode.right.getMinValue()
#                     currentNode.right.remove(currentNode.value, currentNode)
#                 elif parentNoed is None:
#                     if currentNode.left is not None:
#                         currentNode.value = currentNode.left.value
#                         currentNode.right = currentNode.left.rigth
#                         currentNode.left = currentNode.left.left
#                     elif currentNode.right is not None:
#                         currentNode.value = currentNode.right.value
#                         currentNode.value = currentNode.right.left
#                         currentNode.value = currentNode.right.right
#                     else:
#                         currentNode.value = None
#                 elif parentNode.left = currentNode:
#                     parentNode.left = currentNode.left if currentNode.left is not None else currentNode.right
#                 elif parentNode.right == currentNode:
#                     parentNode.right = currentNode.left if currentNode.left is not NOne else currentNode.right
#                 break
#         return self
#
# def gitMinValue(self):
#     currentNode = self
#     while currentNode.left is not None:
#         currentNode = currentNode.left
#     return currentNode.value


# ===== Find Cosest Value in BST =====

# ↓↓↓↓↓ You'll need to uncomment this to run Non-Constructible Change. ↓↓↓↓↓
# {
#   "tree": {
#     "nodes": [
#       {"id": "10", "left": "5", "right": "15", "value": 10},
#       {"id": "15", "left": "13", "right": "22", "value": 15},
#       {"id": "22", "left": null, "right": null, "value": 22},
#       {"id": "13", "left": null, "right": "14", "value": 13},
#       {"id": "14", "left": null, "right": null, "value": 14},
#       {"id": "5", "left": "2", "right": "5-2", "value": 5},
#       {"id": "5-2", "left": null, "right": null, "value": 5},
#       {"id": "2", "left": "1", "right": null, "value": 2},
#       {"id": "1", "left": null, "right": null, "value": 1}
#     ],
#     "root": "10"
#   },
#   "target": 12
# }

# Solved recursively.
# Average: 0(Log(n)) time | 0(Log(n)) space
# Worst: 0(n) time | 0(n) space
def findClosestValueInBst(tree, target):
    return findClosestValueInBstHelper(tree, target, float("inf"))

def findClosestValueInBstHelper(tree, target, closest):
    if tree is None:
        return closest
    if abs(target - closest) > abs(target - tree.value):
        closest = tree.value
    if target < tree.value:
        return findClosestValueInBstHelper(tree.left, target, closest)
    elif target > tree.value:
        return findClosestValueInBstHelper(tree.right, target, closest)
    else:
        return closest
