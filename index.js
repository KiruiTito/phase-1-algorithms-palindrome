function isPalindrome(str) {
  // Convert the string to lowercase and remove all non-letter characters
  str = str.toLowerCase().replace(/[^a-z]/g, "");

  // Check if the string is the same forwards and backwards
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }

  return true;
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Was it a car or a cat I saw?")); // true
console.log(isPalindrome("No 'x' in Nixon")); // true
console.log(isPalindrome("This is not a palindrome")); // false
