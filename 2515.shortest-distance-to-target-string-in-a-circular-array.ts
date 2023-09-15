/*
 * @lc app=leetcode id=2515 lang=typescript
 *
 * [2515] Shortest Distance to Target String in a Circular Array
 */

// @lc code=start
function closetTarget(
  words: string[],
  target: string,
  startIndex: number
): number {
  let distance = -1;

  // loop forward and backward at the sametime looking for a match
  for (let i = 0; i < words.length; i++) {
    const fword = words[(i + startIndex) % words.length];
    const bword =
      words[(words.length - i + startIndex + words.length) % words.length];

    if (fword === target) {
      if (distance === -1) {
        distance = i;
      } else {
        distance = Math.min(distance, i);
      }
      break;
    }

    if (bword === target) {
      if (distance === -1) {
        distance = i;
      } else {
        distance = Math.min(distance, i);
      }
      break;
    }
  }

  return distance;
}
// @lc code=end
