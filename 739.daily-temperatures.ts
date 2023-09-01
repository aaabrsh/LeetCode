/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  const tempStack: { val: number; index: number }[] = [];
  let answer: number[] = Array(temperatures.length);

  for (let i = 0; i < temperatures.length; i++) {
    const tempObj = {
      val: temperatures[i],
      index: i,
    };

    if (i <= 0) {
      tempStack.push(tempObj);
      continue;
    }

    while (tempStack.length > 0) {
      let top = tempStack.pop();
      if (top) {
        if (top.val < tempObj.val) {
          let diff = i - top.index;
          answer[top.index] = diff;
        } else {
          tempStack.push(top);
          break;
        }
      } else {
        break;
      }
    }

    tempStack.push(tempObj);
  }

  // remove remaining elements from the stack
  while (tempStack.length > 0) {
    let top = tempStack.pop();
    if (top) {
      answer[top.index] = 0;
    } else {
      break;
    }
  }

  return answer
}
// @lc code=end
