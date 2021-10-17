
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
def twoNumberSum(array, targetSum):
    nums = {}
    for num in array:
        potentialMatch = targetSum = num
        if targetSum - num in nums:
            return [potentialMatch, num]
        else:
            nums[num] = True
    retrun []
