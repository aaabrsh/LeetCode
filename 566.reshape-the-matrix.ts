/*
 * @lc app=leetcode id=566 lang=typescript
 *
 * [566] Reshape the Matrix
 */

// @lc code=start
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const old_r = mat.length;
  const old_c = mat[0].length;

  const old_mat_size = old_r * old_c;
  const new_mat_size = r * c;

  if (old_mat_size !== new_mat_size) return mat;

  const new_mat: number[][] = new Array(r).fill([]).map((m) => []);

  // tracking indices. n is for new, o is for old. r is row and c is column
  // old matrix tracing indices
  let or = 0;
  let oc = 0;
  // new matrix tracing indices
  let nr = 0;
  let nc = 0;

  for (let i = 0; i < new_mat_size; i++) {
    new_mat[nr][nc] = mat[or][oc];

    oc++;
    nc++;

    if (oc >= old_c) {
      oc = 0;
      or++;
    }

    if (nc >= c) {
      nc = 0;
      nr++;
    }
  }

  return new_mat;
}
// @lc code=end
