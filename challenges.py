
# ===== To Number Sum =====
array = [3, 5, -4, 8 , 11, 1, -1, 6];
targetSum = 10;

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
def twoNumberSum(array, targetSum):
    array.sort()
    left = 0
    right = len(array) - 1
    while left < right:
        currentSum = array[left] + array [right]
        if currentSum == targetSum:
            return [array[left], array[right]]
        elif currentSum < targetSum:
            left += 1
        elif currentSum > targetSum:
            right -= 1
        return []


# ===== Validate Subsequence =====

# ↓↓↓↓↓ You'll need to uncomment this to run TValidate Subsequece. ↓↓↓↓↓
array = [5, 1, 22, 25, 6, -1, 8, 10];
sequece = [1, 6, -1, 10];

# O(n) time | O(1) space
# Using a while loop.
def validateSubsequence(array, sequence):
    arraIdx = 0
    seqIdx = 0
    while arrIdx < len(arry) and seqIdx < len(sequence):
        if array[arrIdx] === sequence[seqIdx]:
            seqIndx += 1
        arrIdx +=1
    return seqIdx == len(sequence)

# O(n) time | O(1) space
# Using a for loop.
def validateSubsequence(array, sequene):
    seqIdx = 0
    for value in array:
        if seqIdx == len(sequence):
            break
        if seqence[seqIdx] == value:
            seqIdx += 1
    return seqIdx == len(sequence)
