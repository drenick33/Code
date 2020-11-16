function digital_root(n) {
  var sum = n;
  let digits = [];
  while (Math.max(Math.floor(Math.log10(Math.abs(sum))), 0) + 1 > 1) {
    while (sum > 0) {
      digits.push(sum % 10);
      sum = parseInt(sum / 10);
    }
    sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum = sum + digits[i];
    }
    digits = [];
  }
  return sum;
}

console.log(digital_root(456));

/*
 *Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
 *
 *
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29 
 *
 *
 *
 *
 *
 *
 *
*/
