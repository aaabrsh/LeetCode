/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  nums = nums.sort();
  const numFreq: { [key: number]: number } = {};
  nums.forEach((num) => {
    if (numFreq[num]) numFreq[num]++;
    else numFreq[num] = 1;
  });

  const freqNum: { [key: number]: number[] } = {};
  for (const [key, value] of Object.entries(numFreq)) {
    if (freqNum[value]) freqNum[value].push(parseInt(key));
    else freqNum[value] = [parseInt(key)];
  }

  let response: number[] = [];

  let length: number = 0;
  let index: number = 0;
  // reverse the keys because the most frequent key has to come first
  let frequencies: string[] = Object.keys(freqNum).reverse();
  while (length < k) {
    const frequency: number = parseInt(frequencies[index]);
    freqNum[frequency].forEach((ele) => {
      response.push(ele);
      length++;
      if (length >= k) return;
    });
    index++;
  }

  return response;
}

// @lc code=end
