// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

var plusOne = function(digits) {
  digits = BigInt(digits.map(el => el.toString()).join('')) + BigInt(1)
  digits = digits.toString().split('')
  return digits
};

//learned to use BigInt() for large numbers(Number() or +num doesn't work on large nums)

//also learned that you can only add BigInt() numbers to other BigInt( numbers. That's why I had to do BigInt(1)