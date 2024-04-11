/*
 * @lc app=leetcode id=717 lang=typescript
 *
 * [717] 1-bit and 2-bit Characters
 */

// @lc code=start
function isOneBitCharacter(bits: number[]): boolean {
  for (let i = 0; i < bits.length; i++) {
    if (i === bits.length - 1) return true;

    /**
     * if the current number is 1, then we are currently on a
     * two bit number and therefore skip the next index as it is
     * representing the same number together with the current one
     *
     */
    if (bits[i] === 1) {
      i++;
    }
  }

  return false;
}
// @lc code=end
