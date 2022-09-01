// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

var findDuplicates = function(nums) {
  let match = []
  const sortedNums = nums.sort((a, b) => a - b)
  for (i = 1 ; i < nums.length ; i++) {
      nums[i - 1] === nums[i] ? match.push(nums[i]) : null
  }
  return match
};