// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

var isPalindrome = function(x) {
  return String(x).split('').reverse().join('') == x ? true : false
};