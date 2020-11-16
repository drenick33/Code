function digital_root(n) {
  return ((n - 1) % 9) + 1;
}

/*
If you struggle with understanding:

In modulo 9 arithmetic any number multiplied by 10 is the same number. We can show that by proving that any number's remainder of dividing by 9 is the same as a remainder from dividing the same number multiplied by 10:

n = 9k + l // any number can be represented as k multiplicity of 9 and l remainder
10n = 90k + 10l
10n = 90k + 9l + l
10n = 9(10k + l) + l // the remainder is also l
With that, we can write any number like so:

1234 = 1 * 10^3 + 2 * 10^2 + 3 * 10 + 4
which in modulo 9 arithmetic is equivalent to

1 + 2 + 3 + 4
So, in mod 9 arithmetic any number is equal to sum of its digits, and also to sum of that sum's digits, and so on...
*/

/*
function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}

function digital_root(n) {
  if (n < 10)
    return n;

  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);
   
  return digital_root(sum);
}

*/
