/*
 * @lc app=leetcode id=567 lang=typescript
 *
 * [567] Permutation in String
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const freq_hash = {};

  for (const s of s1) {
    freq_hash[s] = freq_hash[s] ? freq_hash[s] + 1 : 1;
  }

  for (let i = 0; i <= s2.length - s1.length; i++) {
    let hash_copy = { ...freq_hash };

    for (let j = i; j < i + s1.length; j++) {
      if (hash_copy[s2[j]]) {
        hash_copy[s2[j]]--;
        if (hash_copy[s2[j]] === 0) delete hash_copy[s2[j]];
      } else {
        break;
      }
    }

    if (Object.keys(hash_copy).length === 0) return true;
  }

  return false;
}

// @lc code=end
