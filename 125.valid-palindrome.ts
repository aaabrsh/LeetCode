/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  const alphabet = {
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
    g: true,
    h: true,
    i: true,
    j: true,
    k: true,
    l: true,
    m: true,
    n: true,
    o: true,
    p: true,
    q: true,
    r: true,
    s: true,
    t: true,
    u: true,
    v: true,
    w: true,
    x: true,
    y: true,
    z: true,
  };

  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    const first = s[l].toLowerCase();
    const last = s[r].toLowerCase();
    if (Number.isNaN(parseInt(first)) && !alphabet[first]) {
      l++;
      continue;
    }

    if (Number.isNaN(parseInt(last)) && !alphabet[last]) {
      r--;
      continue;
    }

    if (first !== last) {
      return false;
    }

    l++;
    r--;
  }

  return true;
}
// @lc code=end
