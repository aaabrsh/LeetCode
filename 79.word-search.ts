/*
 * @lc app=leetcode id=79 lang=typescript
 *
 * [79] Word Search
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  if (board.length === 0) return false;

  let rows = board.length;
  let colums = board[0].length;
  let used_cells: { [key: string]: boolean } = {}; // used to avoid going in a circle or backwards when traversing

  const traverse = (i: number, j: number, word_index: number) => {
    if (board[i][j] === word[word_index]) {
      used_cells[`${i}${j}`] = true;
      if (word[word_index + 1] === undefined) return true; // if we have found all the letters that are in `word`
    } else {
      used_cells[`${i}${j}`] = false;
      return false;
    }

    let top = i - 1;
    let bottom = i + 1;
    let left = j - 1;
    let right = j + 1;

    // check top
    if (top >= 0 && top < rows && !used_cells[`${top}${j}`]) {
      if (traverse(top, j, word_index + 1)) return true;
    }

    // check bottom
    if (bottom >= 0 && bottom < rows && !used_cells[`${bottom}${j}`]) {
      if (traverse(bottom, j, word_index + 1)) return true;
    }

    // check left
    if (left >= 0 && left < colums && !used_cells[`${i}${left}`]) {
      if (traverse(i, left, word_index + 1)) return true;
    }

    // check right
    if (right >= 0 && right < colums && !used_cells[`${i}${right}`]) {
      if (traverse(i, right, word_index + 1)) return true;
    }

    used_cells[`${i}${j}`] = false;
    return false;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < colums; j++) {
      if (board[i][j] === word[0]) {
        if (traverse(i, j, 0)) return true;
      }
    }
  }

  return false;
}
// @lc code=end
