/*
 * @lc app=leetcode id=853 lang=typescript
 *
 * [853] Car Fleet
 */

// @lc code=start
function carFleet(target: number, position: number[], speed: number[]): number {
  /**
   * 1. sort the numbers/positions and sort speed array accordingly
   * 2. use the following formula ((target - position) / speed) and store the result in an array
   * 3. the resulting array should go in non-increasing order
   *    e.g [12, 5, 3, 2] => 4 fleets
   * but if there is a number that is greater any number before it,
   * then it means the larger number has caught up with the smaller number car
   *    e.g [12, 5, 7, 3] => 3 fleets (the car at index 2(val 7) has caught up with index 1(val 5), and therefore we take both as one fleet)
   *    e.g [7, 5, 3, 6] => 2 fleet (the car at index 3 has caught up with cars at index 1 and 2)
   */

  let combined = position
    .map((item, index) => {
      return [item, speed[index]];
    })
    .sort((a, b) => a[0] - b[0]);
  let fleet: number[] = [];

  for (let i = combined.length - 1; i >= 0; i--) {
    const p = combined[i][0];
    const s = combined[i][1];

    let steps = (target - p) / s;

    if (steps > fleet[fleet.length - 1] || fleet.length === 0) {
      fleet.push(steps);
    }
  }

  return fleet.length;
}
// @lc code=end
