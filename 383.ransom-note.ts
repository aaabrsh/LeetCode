/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  for (let i = 0; i < ransomNote.length; i++) {
    const charIndex = magazine.indexOf(ransomNote[i]);
    if (charIndex !== -1) {
      magazine = magazine.slice(0, charIndex) + magazine.slice(charIndex + 1);
    } else {
      return false;
    }
  }

  return true;
}
// @lc code=end
