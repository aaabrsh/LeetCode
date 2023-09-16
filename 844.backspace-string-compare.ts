/*
 * @lc app=leetcode id=844 lang=typescript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
function backspaceCompare(s: string, t: string): boolean {
  // start from the back and loop to start
  const len = s.length > t.length ? s.length : t.length;
  let remove_s = 0;
  let remove_t = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (s[i]) {
      if (s[i] === "#") {
        s = s.substring(0, i) + s.substring(i + 1);
        remove_s++;
      } else if (remove_s > 0) {
        s = s.substring(0, i) + s.substring(i + 1);
        remove_s--;
      }
    }
    if (t[i]) {
      if (t[i] === "#") {
        t = t.substring(0, i) + t.substring(i + 1);
        remove_t++;
      } else if (remove_t > 0) {
        t = t.substring(0, i) + t.substring(i + 1);
        remove_t--;
      }
    }
  }

  return s === t;
}


/*******************FIRST SOLUTION *******************/
// use two stacks
// function firstSolution(s: string, t: string): boolean {
//   const s_stack: string[] = [];
//   const t_stack: string[] = [];

//   const len = s.length > t.length ? s.length : t.length;

//   for (let i = 0; i < len; i++) {
//     if (s[i]) {
//       if (s[i] === "#") s_stack.pop();
//       else s_stack.push(s[i]);
//     }

//     if (t[i]) {
//       if (t[i] === "#") t_stack.pop();
//       else t_stack.push(t[i]);
//     }
//   }

//   return s_stack.join("") === t_stack.join("");
// }

// @lc code=end
