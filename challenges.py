
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
coins = [5, 7, 1, 1, 2, 3, 22];

# O(nLogn) time | O(1) space
def nonConstructibleChange(coins):
    coins.sort()

    currentChangeCreated = 0
    for coin in coins:
        if coin > currentChangeCreated + 1:
            return currentChangeCreated + 1

        currentChangeCreated += coin

    return currentChangeCreated + 1
