/*
 * @lc app=leetcode id=463 lang=typescript
 *
 * [463] Island Perimeter
 */

// @lc code=start
function islandPerimeter(grid: number[][]): number {
  let perimeter = 0;

  // loop through the grid
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const block = blockPerimeter(grid, [i, j]);
      if (block === 4) return block; // if it only has one block, no need to check for others
      perimeter += block;
    }
  }

  return perimeter;
}

function blockPerimeter(grid: number[][], index: number[]) {
  if (grid[index[0]][index[1]] !== 1) {
    return 0;
  }

  let perimeter = 4;

  // check top
  if (grid[index[0] - 1]?.[index[1]] === 1) {
    perimeter--;
  }

  // check bottom
  if (grid[index[0] + 1]?.[index[1]] === 1) {
    perimeter--;
  }

  // check left
  if (grid[index[0]]?.[index[1] - 1] === 1) {
    perimeter--;
  }

  // check right
  if (grid[index[0]]?.[index[1] + 1] === 1) {
    perimeter--;
  }

  return perimeter;
}
// @lc code=end
