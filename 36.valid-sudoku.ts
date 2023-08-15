/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
  let curRow = 0;
  let curCol = 0;
  let curBox = 0;
  const row: { [key: string]: boolean }[] = Array(9).fill({});
  const col: { [key: string]: boolean }[] = Array(9).fill({});
  const box: { [key: string]: boolean }[] = Array(9).fill({});
  while (curRow < 9 && curCol < 9 && curBox < 9) {
    let element: string = board[curRow][curCol];

    if (element !== ".") {
      // validate row && column && 3 x 3 sub-box
      if (
        row[curRow][element] ||
        col[curCol][element] ||
        box[curBox][element]
      ) {
        return false;
      } else {
        row[curRow] = { ...row[curRow], [element]: true };
        col[curCol] = { ...col[curCol], [element]: true };
        box[curBox] = { ...box[curBox], [element]: true };
      }
    }

    curCol++;
    if (curCol === 9) {
      curCol = 0;
      curRow++;
    }
    // calculate the index of current 3 x 3 sub-box
    let c = Math.floor(curCol / 3);
    let r = Math.floor(curRow / 3);
    r = r * 3;
    curBox = r + c;
  }
  return true;
}
// @lc code=end
