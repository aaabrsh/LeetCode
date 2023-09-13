/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
function reverseVowels(s: string): string {
  const vowels = "aAeEiIoOuU";
  const arr = s.split("");
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (vowels.includes(arr[l])) {
      if (vowels.includes(arr[r])) {
        // swap
        const temp = s[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
      } else {
        r--;
      }
    } else {
      l++;
    }
  }

  return arr.join("");
}
// @lc code=end
